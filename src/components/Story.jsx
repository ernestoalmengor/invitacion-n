import React from "react";

const Itinerary = () => {
  const events = [
    {
      time: "16:00 a 17:00 p.m.",
      title: "Ceremonia religiosa",
      icon: "ph-thin ph-church",
    },
    {
      time: "17:00 a 18:00 p.m.",
      title: "Sesion de fotos de los novios",
      icon: "ph-thin ph-camera",
    },
    {
      time: "18:00 a 18:30 p.m.",
      title: "Recepcion y brindis familiar",
      icon: "ph-thin ph-wine",
    },
    {
      time: "19:00 a 20:00 p.m.",
      title: "Cena y banquete",
      icon: "ph-thin ph-fork-knife",
    },
    {
      time: "20:00 a 23:00 p.m.",
      title: "Inicia la fiesta, musica y diversion",
      icon: "ph-thin ph-music-notes",
    },
    {
      time: "23:00 a 23:30 p.m.",
      title: "Partida de pastel, ramo y liga",
      icon: "ph-thin ph-cake",
    },
    {
      time: "23:30 a 24:00 a.m.",
      title: "Termina la celebracion de la boda",
      icon: "ph-thin ph-heart",
    },
  ];

  return (
    <section
      id="itinerary"
      style={{
        padding: "0 5% 2rem",
        background: "var(--light)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "0.3rem",
        }}
      >
        <img
          src="/f4.png"
          alt="Decoración superior"
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "150px",
            objectFit: "cover",
            objectPosition: "top",
          }}
          loading="lazy"
        />
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 0 0.4rem" }}>
        <h2
          className="gold-script"
          style={{
            fontSize: "clamp(3rem, 8vw, 4.4rem)",
            textAlign: "center",
            marginTop: 0,
            marginBottom: "1.2rem",
          }}
        >
          Itinerario de Boda
        </h2>

        <div
          style={{
            position: "relative",
            paddingLeft: "72px",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "41px",
              top: "0",
              bottom: "0",
              width: "2px",
              background:
                "linear-gradient(to bottom, rgba(176,136,82,0.25), rgba(176,136,82,0.85), rgba(176,136,82,0.25))",
              zIndex: 1,
            }}
          />

          {events.map((event, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                marginBottom: idx === events.length - 1 ? 0 : "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-62px",
                  width: "62px",
                  height: "62px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    border: "1px solid rgba(176, 136, 82, 0.35)",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(245,239,229,0.95))",
                    boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className={event.icon}
                    style={{
                      fontSize: "1.55rem",
                      color: idx % 2 === 0 ? "var(--primary)" : "#7d6b52",
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  padding: "0.3rem 0",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "700",
                    fontSize: "0.88rem",
                    color: "var(--dark)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {event.time}
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.96rem",
                    color: "#303030",
                    fontWeight: "500",
                    margin: 0,
                    lineHeight: "1.35",
                  }}
                >
                  {event.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "0.7rem" }}
      >
        <img
          src="/f5.png"
          alt="Decoración inferior"
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "150px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Itinerary;
