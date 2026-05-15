import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const AdminGuests = () => {
  const [invitados, setInvitados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // all, confirmado, pendiente
  const [copiedId, setCopiedId] = useState(null);

  const fetchInvitados = useCallback(async () => {
    setLoading(true);
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      setError("Falta configurar VITE_GOOGLE_SCRIPT_URL en el archivo .env");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${scriptUrl}?action=getInvitados`);
      const result = await response.json();
      
      if (result.data) {
        // Remove header row
        const rows = result.data.slice(1);
        const formattedData = rows.map(row => ({
          no: row[0],
          invitado: row[1],
          telefono: row[2],
          pases: row[3],
          confirmados: row[4],
          estado: row[5] || 'Pendiente' // En caso de que esté vacío
        })).filter(row => row.no); // Filter out empty rows
        
        // Remove .reverse() to order ascending (1, 2, 3...)
        setInvitados(formattedData);
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
    fetchInvitados();
  }, [fetchInvitados]);

  const getFilteredInvitados = () => {
    if (filter === 'all') return invitados;
    return invitados.filter(i => (i.estado || '').toLowerCase() === filter.toLowerCase());
  };

  const filteredInvitados = getFilteredInvitados();
  
  const totalPasesConfirmados = invitados
    .filter(i => (i.estado || '').toLowerCase() === 'confirmado')
    .reduce((sum, i) => sum + (Number(i.confirmados) || Number(i.pases) || 0), 0);

  const copyLink = (id) => {
    const url = `${window.location.origin}/?invitado=${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Montserrat, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 className="gold-script" style={{ fontSize: '3rem', margin: 0 }}>Lista de Invitados</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            onClick={fetchInvitados} 
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
          <h3 style={{ margin: 0, color: '#707070', fontSize: '1rem' }}>Total Confirmaciones</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: '0.5rem 0 0' }}>{invitados.filter(i => (i.estado || '').toLowerCase() === 'confirmado').length}</p>
        </div>
        <div style={{ background: '#f5efe9', padding: '1.5rem', borderRadius: '10px', flex: 1, minWidth: '200px', textAlign: 'center' }}>
          <h3 style={{ margin: 0, color: '#707070', fontSize: '1rem' }}>Pases Confirmados (Personas)</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: '0.5rem 0 0' }}>{totalPasesConfirmados}</p>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ marginRight: '1rem', fontWeight: 'bold' }}>Filtrar estado:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="all">Todos</option>
          <option value="confirmado">Confirmados</option>
          <option value="pendiente">Pendientes</option>
        </select>
      </div>

      {loading && invitados.length === 0 ? (
        <p>Cargando datos desde Google Sheets...</p>
      ) : error ? (
        <div style={{ background: '#ffebee', color: '#c62828', padding: '1rem', borderRadius: '5px' }}>{error}</div>
      ) : (
        <div style={{ overflowX: 'auto', background: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #eee' }}>
                <th style={{ padding: '1rem' }}>No.</th>
                <th style={{ padding: '1rem' }}>Invitado / Familia</th>
                <th style={{ padding: '1rem' }}>Teléfono</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>Pases</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>Confirmados</th>
                <th style={{ padding: '1rem' }}>Estado</th>
                <th style={{ padding: '1rem' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvitados.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ padding: '2rem', textAlign: 'center', color: '#777' }}>No hay registros para mostrar.</td>
                </tr>
              ) : (
                filteredInvitados.map((v, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem', color: '#888' }}>{v.no}</td>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: '#4a3535' }}>{v.invitado}</td>
                    <td style={{ padding: '1rem' }}>{v.telefono || '-'}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <span style={{ background: '#eee', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>{v.pases}</span>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>{v.confirmados || '-'}</span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        background: (v.estado || '').toLowerCase() === 'confirmado' ? '#e8f5e9' : '#fff3e0', 
                        color: (v.estado || '').toLowerCase() === 'confirmado' ? '#2e7d32' : '#e65100',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 'bold'
                      }}>
                        {v.estado || 'Pendiente'}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <button 
                        onClick={() => copyLink(v.no)}
                        style={{ padding: '0.4rem 0.8rem', background: '#e3f2fd', color: '#1565c0', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.8rem' }}
                      >
                        <i className="fas fa-link" style={{ marginRight: '5px' }}></i>
                        {copiedId === v.no ? "¡Copiado!" : "Copiar Link"}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminGuests;
