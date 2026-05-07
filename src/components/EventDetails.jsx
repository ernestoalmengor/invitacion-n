import React from "react";

const EventDetails = () => {
  return (
    <section id="location" style={{ padding: "3rem 5% 0", background: "var(--light)", position: "relative" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
        <h2 className="gold-script" style={{ fontSize: "clamp(3.2rem, 8vw, 5rem)", marginBottom: "2rem" }}>
          Detalles del Evento
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.2rem", marginBottom: "2.5rem", alignItems: "center" }}>
          <div>
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", marginBottom: "0.3rem" }}>Misa</h3>
            <p style={{ margin: "0.2rem 0" }}><b>Hora:</b> 10:30 AM</p>
            <p style={{ margin: "0.2rem 0" }}>Iglesia Parroquia Inmaculada Concepcion de Ciudad Vieja</p>
            <p style={{ margin: "0.2rem 0 1rem" }}>Ciudad Vieja Sac, zona 4</p>
            <button onClick={() => window.open("https://maps.google.com/?q=Iglesia+Parroquia+Inmaculada+Concepcion", "_blank")} style={{ background: "#141414", color: "white", border: "none", borderRadius: "999px", padding: "0.65rem 1rem", cursor: "pointer" }}>
              <i className="fas fa-location-dot" /> Ver en Google Maps
            </button>
          </div>
          <div>
            <i className="fas fa-church" style={{ fontSize: "4rem", color: "#707070" }} />
          </div>
        </div>

        <div style={{ borderTop: "3px solid var(--primary)", width: "100%", margin: "0 auto 2.1rem" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.2rem", marginBottom: "2.2rem", alignItems: "center" }}>
          <div>
            <i className="fas fa-champagne-glasses" style={{ fontSize: "4rem", color: "#707070" }} />
            <div style={{ marginTop: "0.8rem" }}>
              <button onClick={() => window.open("https://maps.google.com/?q=Salon+de+Convenciones+Ciudad+Vieja", "_blank")} style={{ background: "#141414", color: "white", border: "none", borderRadius: "999px", padding: "0.65rem 1rem", cursor: "pointer" }}>
                <i className="fas fa-location-dot" /> Ver en Google Maps
              </button>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", marginBottom: "0.3rem" }}>Recepcion y Baile</h3>
            <p style={{ margin: "0.2rem 0" }}><b>Hora:</b> 01:00 PM</p>
            <p style={{ margin: "0.2rem 0" }}>Salon de Convenciones</p>
            <p style={{ margin: "0.2rem 0 1rem" }}>Ciudad Vieja Sac, zona 4</p>
          </div>
        </div>

        <h2 className="gold-script" style={{ fontSize: "clamp(3rem, 7vw, 4.8rem)", marginBottom: "1rem" }}>
          Es un placer invitarte
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "2.2rem", paddingBottom: "2rem" }}>
          <div style={{ textAlign: "center", maxWidth: "420px" }}>
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", marginBottom: "1rem" }}>Familia Lopez Hernandez</h3>
            <p style={{ fontSize: "2rem", fontFamily: "Cormorant Garamond, serif", lineHeight: 1.25, marginBottom: "1rem" }}>
              He reservado <span style={{ color: "var(--primary)", fontWeight: 700 }}>5 pases</span> para ti.
              <br />
              Por favor, confirma tu asistencia.
            </p>
            <button style={{ background: "var(--primary)", color: "white", border: "none", borderRadius: "999px", padding: "0.9rem 1.8rem", fontWeight: 600, cursor: "pointer" }}>
              Confirmar asistencia
            </button>
          </div>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=BodaBelenRicardo" alt="QR de confirmacion" style={{ width: "160px", height: "160px" }} loading="lazy" />
        </div>

        <img src="/f3.png" alt="Decoración floral" style={{ width: "min(320px, 80vw)", marginBottom: "-20px" }} loading="lazy" />
      </div>
    </section>
  );
};

export default EventDetails;
