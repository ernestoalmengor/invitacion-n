import React from "react";

const LocationButtons = () => {
  const locations = [
    {
      name: "Ceremonia Religiosa",
      place: "Iglesia San Felipe Neri",
      address: "Av. Reforma 123, CDMX",
      time: "6:30 PM",
      icon: "fa-church",
      mapUrl: "https://maps.google.com/?q=Iglesia+San+Felipe+Neri+CDMX",
    },
    {
      name: "Recepción",
      place: "Quinta Real Eventos",
      address: "Carretera México 456, CDMX",
      time: "8:00 PM",
      icon: "fa-champagne-glasses",
      mapUrl: "https://maps.google.com/?q=Quinta+Real+Eventos+CDMX",
    },
  ];

  const openMap = (url) => window.open(url, "_blank");

  return (
    <section id="location" style={{ padding: "80px 5%", background: "white" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            textAlign: "center",
            color: "#4a3535",
            marginBottom: "1rem",
          }}
        >
          Ubicación
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            color: "#c97b7b",
          }}
        >
          <i className="fas fa-map-pin"></i> Te esperamos en
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {locations.map((loc, idx) => (
            <div
              key={idx}
              onClick={() => openMap(loc.mapUrl)}
              style={{
                background: "#fffaf7",
                borderRadius: "20px",
                padding: "2rem",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  background: "#f2d5d5",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                <i
                  className={`fas ${loc.icon}`}
                  style={{ fontSize: "1.8rem", color: "#c97b7b" }}
                ></i>
              </div>
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                {loc.name}
              </h3>
              <p>
                <i className="fas fa-location-dot"></i> {loc.place}
              </p>
              <p>
                <i className="fas fa-clock"></i> {loc.time}
              </p>
              <button
                style={{
                  background: "transparent",
                  border: "2px solid #c97b7b",
                  color: "#c97b7b",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-directions"></i> Cómo llegar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationButtons;
