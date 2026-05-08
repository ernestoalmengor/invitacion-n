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
          data-aos="fade-down"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 3.8rem)",
            marginBottom: "1rem",
          }}
        >
          Juntos por la Eternidad
        </h2>

        <div
          data-aos="zoom-in"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "330px",
            height: "440px", // Approximate height for 3/4 aspect ratio at 330px width
            margin: "0 auto",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Momento ${index + 1}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 1.2s ease-in-out",
                opacity: currentIndex === index ? 1 : 0,
                zIndex: currentIndex === index ? 1 : 0,
              }}
              loading="lazy"
            />
          ))}

          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              zIndex: 10,
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(216, 192, 141, 0.8)",
              color: "white",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              zIndex: 10,
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(216, 192, 141, 0.8)",
              color: "white",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>

        <div style={{ marginTop: "1rem" }} data-aos="fade-up">
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
