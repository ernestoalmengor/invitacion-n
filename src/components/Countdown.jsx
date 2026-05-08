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
      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

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
    const start = new Date("2026-06-20T16:00:00");
    const end = new Date("2026-06-20T23:30:00");
    const fmt = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const uid = `boda-20260620-160000@invitacion-n`;
    const dtStamp = fmt(new Date());

    const content = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Invitacion Boda//ES
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Boda Belen y Ricardo
UID:${uid}
DTSTAMP:${dtStamp}
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

  const addToCalendar = () => {
    const startUtc = "20260620T220000Z";
    const endUtc = "20260621T053000Z";
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Boda Belen y Ricardo")}&dates=${startUtc}/${endUtc}&details=${encodeURIComponent("Te esperamos en nuestra boda.")}&location=${encodeURIComponent("Ciudad Vieja Sac, zona 4")}`;

    window.open(googleUrl, "_blank", "noopener,noreferrer");
    // Respaldo universal para Apple/Outlook/calendarios locales.
    createCalendarFile();
  };

  const twoDigits = (value) => String(value).padStart(2, "0");

  const cardStyle = (gold) => ({
    border: `2px solid ${gold ? "var(--primary)" : "var(--dark)"}`,
    borderRadius: "16px",
    width: "100%",
    minHeight: "82px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    color: "var(--dark)",
    boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
    padding: "0.5rem 0.35rem",
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
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "0.45rem",
            marginBottom: "1.6rem",
            width: "min(100%, 420px)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={cardStyle(true)}>
            <b style={{ fontSize: "clamp(1.25rem, 4.8vw, 1.7rem)", lineHeight: 1 }}>
              {twoDigits(timeLeft.days)}
            </b>
            <span style={{ fontSize: "clamp(0.7rem, 2.7vw, 0.86rem)" }}>Dias</span>
          </div>
          <div style={cardStyle(false)}>
            <b style={{ fontSize: "clamp(1.25rem, 4.8vw, 1.7rem)", lineHeight: 1 }}>
              {twoDigits(timeLeft.hours)}
            </b>
            <span style={{ fontSize: "clamp(0.7rem, 2.7vw, 0.86rem)" }}>Horas</span>
          </div>
          <div style={cardStyle(true)}>
            <b style={{ fontSize: "clamp(1.25rem, 4.8vw, 1.7rem)", lineHeight: 1 }}>
              {twoDigits(timeLeft.minutes)}
            </b>
            <span style={{ fontSize: "clamp(0.7rem, 2.7vw, 0.86rem)" }}>Minutos</span>
          </div>
          <div style={cardStyle(false)}>
            <b style={{ fontSize: "clamp(1.25rem, 4.8vw, 1.7rem)", lineHeight: 1 }}>
              {twoDigits(timeLeft.seconds)}
            </b>
            <span style={{ fontSize: "clamp(0.7rem, 2.7vw, 0.86rem)" }}>Segundos</span>
          </div>
        </div>

        <button
          onClick={addToCalendar}
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
