import React from "react";

const Gallery = () => {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="gallery"
      style={{
        padding: "3rem 5% 2.8rem",
        background: "var(--light)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          className="gold-script"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 3.8rem)",
            marginBottom: "1rem",
          }}
        >
          Juntos por la Eternidad
        </h2>

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "330px",
            margin: "0 auto",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Momento ${currentIndex + 1}`}
            style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }}
            loading="lazy"
          />

          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "50%",
              left: "-80px",
              transform: "translateY(-50%)",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "none",
              background: "var(--primary)",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "50%",
              right: "-80px",
              transform: "translateY(-50%)",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "none",
              background: "var(--primary)",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <h3
            style={{
              fontFamily: '"Source Serif 4", serif',
              fontStyle: "italic",
              fontSize: "clamp(1.2rem, 4vw, 1.3rem)",
              marginBottom: "0.5rem",
              fontWeight: "normal",
            }}
          >
            "Así que ya no son dos, sino uno solo. Por tanto, lo que Dios ha
            unido, que no lo separe el hombre"
          </h3>
          <p
            style={{
              fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)",
              lineHeight: 1.25,
              marginBottom: "1rem",
              margin: "0.2rem 0 1rem",
            }}
          >
            — Mateo 19:6
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
