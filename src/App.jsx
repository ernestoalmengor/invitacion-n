import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Itinerary from "./components/Story";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import MusicPlayer from "./components/MusicPlayer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const weddingDate = new Date("2026-05-16T10:30:00");

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "var(--light)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            border: "4px solid var(--primary)",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <p
          className="gold-script"
          style={{
            marginTop: "20px",
            fontSize: "2.5rem",
          }}
        >
          Belen & Ricardo
        </p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <Hero />
      <Countdown targetDate={weddingDate} />
      <Itinerary />
      <EventDetails />
      <Gallery />
      <MusicPlayer />
      <ScrollToTop />
      <footer style={{ background: "var(--light)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "2.5rem 1.2rem 2rem", display: "flex", gap: "1.5rem", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <i className="fas fa-gift" style={{ color: "var(--primary)", fontSize: "3rem" }} />
          <div style={{ maxWidth: "460px" }}>
            <h3 className="gold-script" style={{ fontSize: "clamp(2.8rem, 7vw, 4.4rem)", margin: "0 0 0.6rem" }}>
              El mejor regalo
            </h3>
            <p style={{ margin: "0 0 0.9rem", fontSize: "1.45rem", lineHeight: 1.4 }}>
              El mejor regalo que podemos recibir es tu compañía en este día tan especial.
            </p>
            <p style={{ margin: 0, fontSize: "1.45rem", lineHeight: 1.4 }}>
              Sin embargo, si deseas obsequiarnos algo, agradecemos que sea en efectivo.
            </p>
          </div>
        </div>

        <div style={{ background: "#f2f2f2", padding: "1.8rem 1rem", textAlign: "center" }}>
          <p style={{ margin: 0 }}>© Todos los derechos reservados.</p>
          <p style={{ margin: 0 }}>Desarrollado por Kevin Almengor</p>
        </div>
      </footer>
    </>
  );
}

export default App;
