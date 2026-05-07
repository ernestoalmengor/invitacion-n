import React from "react";

const Itinerary = () => {
  const events = [
    { time: "16:00 a 17:00 p.m.", title: "Inicia la ceremonia religiosa o civil", icon: "fa-church" },
    { time: "17:00 a 18:00 p.m.", title: "Sesion de fotos de los novios", icon: "fa-camera" },
    { time: "18:00 a 18:30 p.m.", title: "Recepcion y brindis familiar", icon: "fa-champagne-glasses" },
    { time: "19:00 a 20:00 p.m.", title: "Cena y banquete", icon: "fa-bell-concierge" },
    { time: "19:30 a 20:30 p.m.", title: "Primer baile de los novios", icon: "fa-ring" },
    { time: "21:00 a 23:00 p.m.", title: "Inicia la fiesta, musica y diversion", icon: "fa-music" },
    { time: "23:00 a 23:30 p.m.", title: "Partida de pastel, ramo y liga", icon: "fa-cake-candles" },
    { time: "23:30 a 24:00 a.m.", title: "Termina la celebracion de la boda", icon: "fa-heart" },
  ];

  return (
    <section id="itinerary" style={{ padding: "0 5% 2rem", background: "var(--light)", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.2rem" }}>
        <img src="/f4.png" alt="Decoración superior" style={{ maxWidth: "100%", width: "100%", height: "150px", objectFit: "cover", objectPosition: "top" }} loading="lazy" />
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "1rem 0" }}>
        <h2 className="gold-script" style={{ fontSize: "clamp(3rem, 8vw, 4.4rem)", textAlign: "center", marginBottom: "2rem" }}>
          Itinerario de Boda
        </h2>

        <div style={{ position: "relative", paddingLeft: "50px", maxWidth: "460px", margin: "0 auto" }}>
          <div style={{ position: "absolute", left: "24px", top: "0", bottom: "0", width: "1px", background: "#585858", zIndex: 1 }} />

          {events.map((event, idx) => (
            <div key={idx} style={{ position: "relative", marginBottom: "1.5rem", display: "flex", alignItems: "flex-start" }}>
              <div style={{ position: "absolute", left: "-50px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                <i className={`fas ${event.icon}`} style={{ fontSize: "1.4rem", color: idx % 2 === 0 ? "var(--primary)" : "#707070" }}></i>
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700", fontSize: "0.92rem", color: "var(--dark)", marginBottom: "0.15rem" }}>{event.time}</p>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", color: "#303030", fontWeight: "400", margin: 0 }}>{event.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <img src="/f5.png" alt="Decoración inferior" style={{ maxWidth: "100%", width: "100%", height: "150px", objectFit: "cover", objectPosition: "bottom" }} loading="lazy" />
      </div>
    </section>
  );
};

export default Itinerary;
