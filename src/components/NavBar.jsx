import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const isMobile = windowWidth <= 768;

  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    background:
      scrolled || menuOpen
        ? "rgba(255, 255, 255, 0.98)"
        : "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    padding: scrolled ? "0.7rem 5%" : "1rem 5%",
    transition: "all 0.3s ease",
    boxShadow: scrolled || menuOpen ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
  };

  const linkStyle = {
    textDecoration: "none",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    color: "var(--dark)",
    transition: "color 0.3s",
    fontSize: isMobile ? "1.2rem" : "0.9rem",
    letterSpacing: "1px",
    cursor: "pointer",
    padding: isMobile ? "1rem 0" : "0",
    display: "block",
    textAlign: "center",
  };

  return (
    <nav style={navStyle}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#"
          className="gold-nav"
          style={{
            fontSize: "1.8rem",
            textDecoration: "none",
            zIndex: 1001,
          }}
        >
          B&R
        </a>

        {isMobile && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "var(--primary)",
              zIndex: 1001,
            }}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        )}

        <div
          style={{
            display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
            flexDirection: isMobile ? "column" : "row",
            position: isMobile ? "absolute" : "static",
            top: isMobile ? "100%" : "auto",
            left: 0,
            width: isMobile ? "100%" : "auto",
            background: isMobile ? "rgba(255, 255, 255, 0.98)" : "transparent",
            padding: isMobile ? "2rem 0" : "0",
            gap: isMobile ? "0" : "2rem",
            boxShadow: isMobile ? "0 10px 20px rgba(0,0,0,0.1)" : "none",
            borderTop: isMobile ? "1px solid #f1f1f1" : "none",
          }}
        >
          <a onClick={() => scrollToSection("hero")} style={linkStyle}>
            Inicio
          </a>
          <a onClick={() => scrollToSection("countdown")} style={linkStyle}>
            Nos Casamos
          </a>
          <a onClick={() => scrollToSection("itinerary")} style={linkStyle}>
            Itinerario
          </a>
          <a onClick={() => scrollToSection("location")} style={linkStyle}>
            Detalles
          </a>
          <a onClick={() => scrollToSection("gallery")} style={linkStyle}>
            Galería
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
