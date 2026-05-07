import React from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;
      if (distance < 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % 86400000) / 3600000),
        minutes: Math.floor((distance % 3600000) / 60000),
        seconds: Math.floor((distance % 60000) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const createCalendarFile = () => {
    const start = new Date("2026-05-16T10:30:00");
    const end = new Date("2026-05-16T23:30:00");
    const fmt = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const content = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Boda Belen y Ricardo
DTSTART:${fmt(start)}
DTEND:${fmt(end)}
LOCATION:Ciudad Vieja Sac, zona 4
DESCRIPTION:Te esperamos en nuestra boda.
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "boda-belen-ricardo.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  const cardStyle = (gold) => ({
    border: `2px solid ${gold ? "var(--primary)" : "var(--dark)"}`,
    borderRadius: "16px",
    width: "72px",
    height: "88px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    color: "var(--dark)",
  });

  return (
    <section
      id="countdown"
      style={{ background: "var(--light)", padding: "2rem 1rem 3rem" }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <h2
          className="gold-script"
          style={{
            fontSize: "clamp(3rem, 9vw, 4.4rem)",
            margin: "0.2rem 0 1rem",
          }}
        >
          ¡Nos Casamos!
        </h2>

        <div style={{ marginBottom: "1.6rem" }}>
          <div
            style={{
              letterSpacing: "2px",
              fontWeight: 600,
              fontSize: "1.8rem",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            JUNIO
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <span
              style={{
                borderTop: "1px solid #d8c08d",
                borderBottom: "1px solid #d8c08d",
                padding: "0.35rem 0.8rem",
                letterSpacing: "2px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.25rem",
              }}
            >
              SABADO
            </span>
            <span
              style={{
                fontSize: "3.3rem",
                lineHeight: 1,
                fontFamily: '"Great Vibes", cursive',
                color: "var(--primary)",
              }}
            >
              20
            </span>
            <span
              style={{
                borderTop: "1px solid #d8c08d",
                borderBottom: "1px solid #d8c08d",
                padding: "0.35rem 0.8rem",
                letterSpacing: "2px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.25rem",
              }}
            >
              2026
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.8rem",
            marginBottom: "1.6rem",
          }}
        >
          <div style={cardStyle(true)}>
            <b>{timeLeft.days}</b>
            <span>Dias</span>
          </div>
          <div style={cardStyle(false)}>
            <b>{timeLeft.hours}</b>
            <span>Horas</span>
          </div>
          <div style={cardStyle(true)}>
            <b>{timeLeft.minutes}</b>
            <span>Minutos</span>
          </div>
          <div style={cardStyle(false)}>
            <b>{timeLeft.seconds}</b>
            <span>Segundos</span>
          </div>
        </div>

        <button
          onClick={createCalendarFile}
          style={{
            background: "var(--primary)",
            color: "white",
            border: "none",
            borderRadius: "999px",
            padding: "0.9rem 1.7rem",
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: "2rem",
          }}
        >
          Agregar a calendario
        </button>

        <p
          style={{
            fontFamily: '"Source Serif 4", serif',
            fontSize: "1.1rem",
            fontStyle: "italic",
            margin: "0.2rem 0",
          }}
        >
          Queremos compartir este momento tan especial contigo. Con la bendicion
          de Dios, de nuestros padres
        </p>
        <p
          style={{
            fontFamily: '"Source Serif 4", serif',
            fontSize: "1.2rem",
            fontStyle: "italic",
            margin: "0 0 1.3rem",
          }}
        ></p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.4rem",
            flexWrap: "nowrap",
            marginBottom: "1.1rem",
            width: "100%",
            maxWidth: "760px",
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
          }}
        >
          <div
            style={{
              textAlign: "right",
              paddingRight: "1.2rem",
              borderRight: "2px solid var(--primary)",
              flex: "1 1 50%",
              minWidth: 0,
              fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              lineHeight: 1.35,
            }}
          >
            <p style={{ margin: 0, whiteSpace: "nowrap" }}>
              Juan Jose Castellanos
            </p>
            <p style={{ margin: 0, whiteSpace: "nowrap" }}>
              Maria Paula Beltran
            </p>
          </div>
          <div
            style={{
              textAlign: "left",
              flex: "1 1 50%",
              minWidth: 0,
              fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              lineHeight: 1.35,
            }}
          >
            <p style={{ margin: 0, whiteSpace: "nowrap" }}>
              Arturo Villagran Boch
            </p>
            <p style={{ margin: 0, whiteSpace: "nowrap" }}>
              Laura Marroquin de Villagran
            </p>
          </div>
        </div>

        <p
          style={{
            fontFamily: '"Source Serif 4", serif',
            fontSize: "1.1rem",
            fontStyle: "italic",
            marginBottom: "0.6rem",
          }}
        >
          y nuestros padrinos
        </p>
        <p style={{ margin: 0 }}>Jose Rafael Lautaro Lopez</p>
        <p style={{ marginTop: 0 }}>Rosa Maria Hernandez Juarez</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.8rem",
            fontSize: "2.2rem",
            marginTop: "0.5rem",
          }}
        >
          <i className="far fa-heart" />
          <i className="far fa-heart" style={{ fontSize: "2.8rem" }} />
          <i className="far fa-heart" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
