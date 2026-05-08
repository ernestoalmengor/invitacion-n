import React from "react";

const EventDetails = () => {
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
          style={{
            fontSize: "clamp(3.2rem, 8vw, 5rem)",
            marginBottom: "1rem",
            marginTop: 0,
          }}
        >
          Detalles del Evento
        </h2>

        <div
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
          style={{ fontSize: "clamp(3rem, 7vw, 4.8rem)", marginBottom: "1rem" }}
        >
          Es un placer invitarte
        </h2>

        <div
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
                5 pases
              </span>{" "}
              para ti.
              <br />
              Por favor, confirma tu asistencia.
            </p>
            <button
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
    </section>
  );
};

export default EventDetails;
