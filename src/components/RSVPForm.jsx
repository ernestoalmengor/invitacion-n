import React, { useState } from "react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RSVP:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", guests: "1", message: "" });
    }, 3000);
  };

  if (submitted) {
    return (
      <section
        id="rsvp"
        style={{
          padding: "80px 5%",
          background: "linear-gradient(135deg, #fdf7f5 0%, #f9ece9 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "white",
            borderRadius: "30px",
            padding: "3rem",
            textAlign: "center",
          }}
        >
          <i
            className="fas fa-check-circle"
            style={{ fontSize: "3rem", color: "#c97b7b", marginBottom: "1rem" }}
          ></i>
          <h3 style={{ fontFamily: "Playfair Display" }}>
            ¡Gracias por confirmar!
          </h3>
          <p>Te esperamos para celebrar juntos ❤️</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      style={{
        padding: "80px 5%",
        background: "linear-gradient(135deg, #fdf7f5 0%, #f9ece9 100%)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            textAlign: "center",
            color: "#4a3535",
            marginBottom: "1rem",
          }}
        >
          Confirmar Asistencia
        </h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          <i className="fas fa-pen-alt"></i> Por favor confirma antes del 1 de
          Julio
        </p>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "white",
            borderRadius: "30px",
            padding: "3rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                }}
              >
                <i className="fas fa-user"></i> Nombre completo *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e0d6d2",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                }}
              >
                <i className="fas fa-envelope"></i> Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e0d6d2",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                }}
              >
                <i className="fas fa-phone"></i> Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e0d6d2",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                }}
              >
                <i className="fas fa-users"></i> ¿Cuántos asistentes?
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e0d6d2",
                  borderRadius: "15px",
                }}
              >
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
              </select>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                }}
              >
                <i className="fas fa-comment"></i> Mensaje para los novios
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #e0d6d2",
                  borderRadius: "15px",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                background: "#c97b7b",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "15px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-check"></i> Confirmar Asistencia
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
