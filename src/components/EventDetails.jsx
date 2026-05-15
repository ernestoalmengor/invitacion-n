import React, { useState, useEffect } from "react";

const EventDetails = ({ guestData }) => {
  const [showModal, setShowModal] = useState(false);
  const [guestCount, setGuestCount] = useState(5);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (guestData && guestData.pases) {
      setGuestCount(Number(guestData.pases) || 1);
    }
  }, [guestData]);

  // Use dynamic data or fallback to generic
  const isGeneric = !guestData || !guestData.no;
  const displayName = isGeneric ? '"Aca se coloca el nombre del invitado"' : guestData.invitado;
  const totalPasses = isGeneric ? 5 : Number(guestData.pases) || 1;

  const handleIncrement = () => {
    if (guestCount < totalPasses) setGuestCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (guestCount > 1) setGuestCount((prev) => prev - 1);
  };

  const handleConfirm = () => {
    setIsSubmitting(true);

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    
    if (!isGeneric && scriptUrl) {
      fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          action: "update_rsvp",
          id: guestData.no,
          confirmados: guestCount,
          estado: "Confirmado"
        }),
      })
      .then(() => {
        setIsSubmitting(false);
        setIsConfirmed(true);
        setTimeout(() => {
          setShowModal(false);
          setIsConfirmed(false);
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitting(false);
        setIsConfirmed(true);
        setTimeout(() => { setShowModal(false); setIsConfirmed(false); }, 3000);
      });
    } else {
      // Simulate save for generic view or missing URL
      setTimeout(() => {
        setIsSubmitting(false);
        setIsConfirmed(true);
        setTimeout(() => {
          setShowModal(false);
          setIsConfirmed(false);
        }, 3000);
      }, 1000);
    }
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
              {displayName}
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
            {!isGeneric && guestData?.estado?.toLowerCase() === 'confirmado' ? (
              <div style={{
                background: '#e8f5e9',
                color: '#2e7d32',
                padding: '0.8rem',
                borderRadius: '8px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
                Asistencia ya confirmada ({guestData.confirmados || guestCount} pases)
              </div>
            ) : (
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
            )}
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
            padding: "20px",
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
            {!isConfirmed ? (
              <>
                <h2
                  className="gold-script"
                  style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}
                >
                  Confirmar Asistencia
                </h2>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#707070",
                    marginBottom: "1.5rem",
                  }}
                >
                  Asignados:{" "}
                  <span style={{ fontWeight: 700, color: "var(--primary)" }}>
                    {totalPasses} pases
                  </span>
                </p>

                <p style={{ fontFamily: "Montserrat, sans-serif", color: "#4a3535", fontSize: "0.9rem", marginBottom: "0.5rem", textAlign: "left" }}>¿Cuántos asistirán?</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    <i
                      className="fas fa-minus"
                      style={{ fontSize: "0.9rem" }}
                    ></i>
                  </button>
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: 600,
                      width: "40px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {guestCount}
                  </span>
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    <i
                      className="fas fa-plus"
                      style={{ fontSize: "0.9rem" }}
                    ></i>
                  </button>
                </div>

                <div
                  style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
                >
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
                      fontWeight: 500,
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleConfirm}
                    disabled={isSubmitting}
                    style={{
                      flex: 2,
                      background: isSubmitting ? "#a8a8a8" : "var(--primary)",
                      color: "white",
                      border: "none",
                      borderRadius: "999px",
                      padding: "0.8rem",
                      fontWeight: 600,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      fontSize: "0.95rem",
                    }}
                  >
                    {isSubmitting ? "Enviando..." : "Confirmar"}
                  </button>
                </div>
              </>
            ) : (
              <div style={{ padding: "1rem 0" }}>
                <i
                  className="fas fa-check-circle"
                  style={{
                    fontSize: "4rem",
                    color: "var(--primary)",
                    marginBottom: "1rem",
                  }}
                ></i>
                <h2
                  className="gold-script"
                  style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}
                >
                  ¡Gracias!
                </h2>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#4a3535",
                    fontSize: "1.1rem",
                  }}
                >
                  Gracias por confirmar tu asistencia.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetails;
