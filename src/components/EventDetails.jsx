import React from "react";

const EventDetails = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [guestCount, setGuestCount] = React.useState(1);
  const totalPasses = 5;

  const handleIncrement = () => {
    if (guestCount < totalPasses) setGuestCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (guestCount > 1) setGuestCount(prev => prev - 1);
  };

  const handleConfirm = () => {
    const message = `Hola! Confirmo mi asistencia para ${guestCount} personas de la Familia Lopez Hernandez.`;
    const whatsappUrl = `https://wa.me/50255555555?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowModal(false);
  };

  return (
    <section
      id="location"
      style={{
        padding: "2rem 5% 0",
        background: "var(--light)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
        <h2
          className="gold-script"
          data-aos="fade-down"
          style={{
            fontSize: "clamp(3.2rem, 8vw, 5rem)",
            marginBottom: "1rem",
            marginTop: 0,
          }}
        >
          Detalles del Evento
        </h2>

        <div
          data-aos="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.2rem",
            marginBottom: "2rem",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <i
              className="ph-thin ph-church"
              style={{ fontSize: "4rem", color: "#707070" }}
            />
            <p style={{ margin: "0.6rem 0 0.2rem" }}>
              <b>Hora:</b> 04:00 PM
            </p>
            <p style={{ margin: "0.2rem 0" }}>Iglesia La Merced</p>
            <p style={{ margin: "0.2rem 0 1rem" }}>Antigua Guatemala</p>
            <button
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/nZA6Z7XqdySadH9EA",
                  "_blank",
                )
              }
              style={{
                background: "#141414",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding: "0.65rem 1rem",
                cursor: "pointer",
              }}
            >
              <i className="ph-thin ph-map-pin" /> Ver en Google Maps
            </button>
          </div>
        </div>

        <div
          style={{
            borderTop: "3px solid var(--primary)",
            width: "100%",
            margin: "0 auto 2.1rem",
          }}
        />

        <div
          data-aos="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.2rem",
            marginBottom: "2.2rem",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <i
              className="ph-thin ph-wine"
              style={{ fontSize: "4rem", color: "#707070" }}
            />
            <p style={{ margin: "0.6rem 0 0.2rem" }}>
              <b>Hora:</b> 06:00 PM
            </p>
            <p style={{ margin: "0.2rem 0" }}>Jardín Verde Eventos</p>
            <p style={{ margin: "0.2rem 0 1rem" }}>Antigua Guatemala</p>
            <button
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/srJGen6LGGz2AT4J7",
                  "_blank",
                )
              }
              style={{
                background: "#141414",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding: "0.65rem 1rem",
                cursor: "pointer",
              }}
            >
              <i className="ph-thin ph-map-pin" /> Ver en Google Maps
            </button>
          </div>
        </div>

        <h2
          className="gold-script"
          data-aos="fade-down"
          style={{ fontSize: "clamp(3rem, 7vw, 4.8rem)", marginBottom: "1rem" }}
        >
          Es un placer invitarte
        </h2>

        <div
          data-aos="zoom-in"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(1rem, 4vw, 2.2rem)",
            paddingBottom: "2rem",
          }}
        >
          <div style={{ textAlign: "left", maxWidth: "420px" }}>
            <h3
              style={{
                fontFamily: '"Source Serif 4", serif',
                fontStyle: "italic",
                fontSize: "clamp(1rem, 4vw, 1.3rem)",
                marginBottom: "0.5rem",
                fontWeight: "normal",
              }}
            >
              Familia Lopez Hernandez
            </h3>
            <p
              style={{
                fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)",
                lineHeight: 1.25,
                marginBottom: "1rem",
                margin: "0.2rem 0 1rem",
              }}
            >
              He reservado{" "}
              <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                {totalPasses} pases
              </span>{" "}
              para ti.
              <br />
              Por favor, confirma tu asistencia.
            </p>
            <button
              onClick={() => setShowModal(true)}
              style={{
                background: "var(--primary)",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding:
                  "clamp(0.6rem, 2vw, 0.9rem) clamp(1.2rem, 3vw, 1.8rem)",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "clamp(0.85rem, 3vw, 1rem)",
              }}
            >
              Confirmar asistencia
            </button>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=BodaBelenRicardo"
              alt="QR de confirmacion"
              style={{
                width: "clamp(90px, 25vw, 160px)",
                height: "clamp(90px, 25vw, 160px)",
                display: "block",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
            padding: "20px"
          }}
        >
          <div
            data-aos="zoom-in"
            style={{
              background: "white",
              padding: "2.5rem 2rem",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "400px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            <h2 className="gold-script" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>¿Cuántos Asistirán?</h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#707070', marginBottom: "1.5rem" }}>
              Asignados: <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{totalPasses} pases</span>
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <button
                onClick={handleDecrement}
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                  background: "white",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <i className="fas fa-minus" style={{ fontSize: '0.9rem' }}></i>
              </button>
              <span style={{ fontSize: "2rem", fontWeight: 600, width: "40px", fontFamily: 'Montserrat, sans-serif' }}>{guestCount}</span>
              <button
                onClick={handleIncrement}
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                  background: "white",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <i className="fas fa-plus" style={{ fontSize: '0.9rem' }}></i>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  flex: 1,
                  background: "transparent",
                  color: "#707070",
                  border: "1px solid #ddd",
                  borderRadius: "999px",
                  padding: "0.8rem",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  fontWeight: 500
                }}
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                style={{
                  flex: 2,
                  background: "var(--primary)",
                  color: "white",
                  border: "none",
                  borderRadius: "999px",
                  padding: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "0.95rem"
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetails;
