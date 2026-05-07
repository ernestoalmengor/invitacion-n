import React from "react";

const Gallery = () => {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" style={{ padding: "3rem 5% 2.8rem", background: "var(--light)", position: "relative" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <h2 className="gold-script" style={{ fontSize: "clamp(3rem, 8vw, 5rem)", marginBottom: "2rem" }}>
          Juntos por la Eternidad
        </h2>

        <div style={{ position: "relative", width: "100%", maxWidth: "520px", margin: "0 auto", borderRadius: "8px", overflow: "hidden" }}>
          <img src={images[currentIndex]} alt={`Momento ${currentIndex + 1}`} style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }} loading="lazy" />

          <button onClick={prevSlide} style={{ position: "absolute", top: "50%", left: "-80px", transform: "translateY(-50%)", width: "56px", height: "56px", borderRadius: "50%", border: "none", background: "var(--primary)", color: "white", fontSize: "1.5rem", cursor: "pointer" }}>
            <i className="fas fa-chevron-left" />
          </button>
          <button onClick={nextSlide} style={{ position: "absolute", top: "50%", right: "-80px", transform: "translateY(-50%)", width: "56px", height: "56px", borderRadius: "50%", border: "none", background: "var(--primary)", color: "white", fontSize: "1.5rem", cursor: "pointer" }}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", color: "var(--dark)", fontStyle: "italic", marginBottom: "0.4rem", lineHeight: 1.3 }}>
            "Así que ya no son dos, sino uno solo. Por tanto,
            <br />
            lo que Dios ha unido, que no lo separe el hombre"
          </p>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem", color: "var(--dark)" }}>— Mateo 19:6</p>
        </div>
      </div>

      <img src="/f2.png" alt="Decoración floral" style={{ position: "absolute", left: "-22px", bottom: "0", width: "min(170px, 30vw)", pointerEvents: "none" }} loading="lazy" />
    </section>
  );
};

export default Gallery;
