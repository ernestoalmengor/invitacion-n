import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Itinerary from "../components/Story";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import Gallery from "../components/Gallery";
import MusicPlayer from "../components/MusicPlayer";
import ScrollToTop from "../components/ScrollToTop";
import Envelope from "../components/Envelope";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const weddingDate = new Date("2026-06-20T16:00:00");

  const [guestData, setGuestData] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });

    const initData = async () => {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      const urlParams = new URLSearchParams(window.location.search);
      const guestId = urlParams.get('invitado');
      const startTime = Date.now();

      if (scriptUrl && guestId) {
        // Fetch specific guest data FIRST
        try {
          const response = await fetch(`${scriptUrl}?action=getGuest&id=${guestId}`);
          const result = await response.json();
          if (result.data) {
            setGuestData(result.data);
          }
        } catch (error) {
          console.error("Error fetching guest data:", error);
        }
      }

      // Ensure a minimum 1s loading screen for aesthetics, but don't stack it if fetch took longer
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, 1000 - elapsed);
      
      setTimeout(() => {
        setLoading(false);
        
        // Log View DEFERRED
        if (scriptUrl && !localStorage.getItem('invitation_viewed')) {
          setTimeout(() => {
            localStorage.setItem('invitation_viewed', 'true');
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const device = isMobile ? 'Mobile' : 'Desktop';
            fetch(scriptUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: JSON.stringify({ action: 'view', dispositivo: device })
            }).catch(e => console.error(e));
          }, 500); // Wait half a second after page load
        }
      }, remainingTime);
    };

    initData();
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
          Belén & Ricardo
        </p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <>
      {!envelopeOpened && <Envelope onOpen={() => setEnvelopeOpened(true)} />}
      <NavBar />
      <Hero />
      <Countdown targetDate={weddingDate} />
      <Itinerary />
      <EventDetails guestData={guestData} />
      <Gallery />
      <MusicPlayer autoPlayTrigger={envelopeOpened} />
      <ScrollToTop />
      <footer style={{ background: "var(--light)" }}>
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "2.5rem 1.2rem 2rem",
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <div style={{ maxWidth: "460px", textAlign: "center" }}>
            <h2
              className="gold-script"
              style={{
                fontSize: "clamp(3.2rem, 8vw, 5rem)",
                marginBottom: "1rem",
                marginTop: 0,
              }}
            >
              El mejor regalo
            </h2>
            <i
              className="fas fa-gift"
              style={{
                color: "var(--primary)",
                fontSize: "3rem",
                marginBottom: "1rem",
                display: "block",
              }}
            />
            <p
              style={{
                fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)",
                lineHeight: 1.25,
                marginBottom: "1rem",
                margin: "0.2rem 0 1rem",
                textAlign: "justify",
              }}
            >
              El mejor regalo que podemos recibir es tu compañía en este día tan
              especial.
            </p>
            <p
              style={{
                fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)",
                lineHeight: 1.25,
                marginBottom: "1rem",
                margin: "0.2rem 0 1rem",
                textAlign: "justify",
              }}
            >
              Sin embargo, si deseas obsequiarnos algo, agradecemos que sea en
              efectivo.
            </p>
          </div>
        </div>

        <div
          style={{
            background: "#f2f2f2",
            padding: "1.8rem 1rem",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#000000ff" }}>
            © Todos los derechos reservados.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#000000ff" }}>
            Desarrollado por Kevin Almengor
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
