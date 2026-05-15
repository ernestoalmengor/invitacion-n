import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [vistas, setVistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // all, 1h, 24h, 7d
  
  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const fetchVistas = useCallback(async () => {
    setLoading(true);
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      setError("Falta configurar VITE_GOOGLE_SCRIPT_URL en el archivo .env");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${scriptUrl}?action=getVistas`);
      const result = await response.json();
      
      if (result.data) {
        // Remove header row
        const rows = result.data.slice(1);
        const formattedData = rows.map(row => ({
          no: row[0],
          fecha: new Date(row[1]).toLocaleDateString(),
          hora: new Date(row[2]).toLocaleTimeString(),
          rawDate: new Date(`${row[1]}T${new Date(row[2]).toTimeString().split(' ')[0]}`),
          dispositivo: row[3]
        })).filter(row => row.no); // Filter out empty rows
        
        // Remove reverse to order ascending (1, 2, 3...)
        setVistas(formattedData);
        setError(null);
      } else {
        setError(result.message || "Error al cargar datos");
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión con Google Sheets");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVistas();
  }, [fetchVistas]);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, itemsPerPage]);

  const getFilteredVistas = () => {
    if (filter === 'all') return vistas;
    
    const now = new Date();
    return vistas.filter(v => {
      if (!v.rawDate || isNaN(v.rawDate)) return true;
      const diffHours = (now - v.rawDate) / (1000 * 60 * 60);
      
      if (filter === '1h') return diffHours <= 1;
      if (filter === '24h') return diffHours <= 24;
      if (filter === '7d') return diffHours <= (24 * 7);
      return true;
    });
  };

  const filteredVistas = getFilteredVistas();
  
  // Paginación Lógica
  const totalPages = Math.ceil(filteredVistas.length / itemsPerPage);
  const paginatedVistas = filteredVistas.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Montserrat, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 className="gold-script" style={{ fontSize: '3rem', margin: 0 }}>Dashboard</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            onClick={fetchVistas} 
            disabled={loading}
            style={{ padding: '0.5rem 1rem', background: 'white', color: '#333', border: '1px solid #ccc', textDecoration: 'none', borderRadius: '5px', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            <i className={`fas fa-sync-alt ${loading ? 'fa-spin' : ''}`} style={{ marginRight: '8px' }}></i>
            Actualizar
          </button>
          <Link to="/" style={{ padding: '0.5rem 1rem', background: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Ver Invitación</Link>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <div style={{ background: '#f5efe9', padding: '1.5rem', borderRadius: '10px', flex: 1, minWidth: '200px', textAlign: 'center' }}>
          <h3 style={{ margin: 0, color: '#707070', fontSize: '1rem' }}>Total Vistas</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: '0.5rem 0 0' }}>{vistas.length}</p>
        </div>
        <div style={{ background: '#f5efe9', padding: '1.5rem', borderRadius: '10px', flex: 1, minWidth: '200px', textAlign: 'center' }}>
          <h3 style={{ margin: 0, color: '#707070', fontSize: '1rem' }}>Vistas (Filtro)</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: '0.5rem 0 0' }}>{filteredVistas.length}</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <label style={{ marginRight: '1rem', fontWeight: 'bold' }}>Filtro de tiempo:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="all">Todas</option>
            <option value="1h">Última Hora</option>
            <option value="24h">Últimas 24 Horas</option>
            <option value="7d">Últimos 7 Días</option>
          </select>
        </div>
        <div>
          <label style={{ marginRight: '1rem', fontWeight: 'bold' }}>Mostrar:</label>
          <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {loading && vistas.length === 0 ? (
        <p>Cargando datos desde Google Sheets...</p>
      ) : error ? (
        <div style={{ background: '#ffebee', color: '#c62828', padding: '1rem', borderRadius: '5px' }}>{error}</div>
      ) : (
        <>
          <div style={{ overflowX: 'auto', background: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #eee' }}>
                  <th style={{ padding: '1rem' }}>No.</th>
                  <th style={{ padding: '1rem' }}>Fecha</th>
                  <th style={{ padding: '1rem' }}>Hora</th>
                  <th style={{ padding: '1rem' }}>Dispositivo</th>
                </tr>
              </thead>
              <tbody>
                {paginatedVistas.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ padding: '2rem', textAlign: 'center', color: '#777' }}>No hay vistas en este periodo.</td>
                  </tr>
                ) : (
                  paginatedVistas.map((v, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '1rem' }}>{v.no}</td>
                      <td style={{ padding: '1rem' }}>{v.fecha}</td>
                      <td style={{ padding: '1rem' }}>{v.hora}</td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ 
                          background: v.dispositivo === 'Mobile' ? '#e3f2fd' : '#e8f5e9', 
                          color: v.dispositivo === 'Mobile' ? '#1565c0' : '#2e7d32',
                          padding: '0.3rem 0.6rem',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: 'bold'
                        }}>
                          {v.dispositivo}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                style={{ padding: '0.5rem 1rem', background: currentPage === 1 ? '#f0f0f0' : 'var(--primary)', color: currentPage === 1 ? '#aaa' : 'white', border: 'none', borderRadius: '5px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
              >
                Anterior
              </button>
              <span style={{ fontWeight: 'bold' }}>Página {currentPage} de {totalPages}</span>
              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                style={{ padding: '0.5rem 1rem', background: currentPage === totalPages ? '#f0f0f0' : 'var(--primary)', color: currentPage === totalPages ? '#aaa' : 'white', border: 'none', borderRadius: '5px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
              >
                Siguiente
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
