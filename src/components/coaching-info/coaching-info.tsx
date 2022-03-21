import React from "react";

const CoachingInfo: React.FC = () => {
  return (
    <section id="coach-component" className="coach-info-component content-section">
      <article className="coach-info-article">
        <div className="theme-section-small">
          <h1 className="title">Livscoach</h1>
        </div>
        <div className="what-is-coach section-padding text-section">
          <h1>Vad är en livscoach?</h1>
          <p className="text-content">
            Jag hjälper dig gärna med att hitta tillbaka till dig själv genom
            teraputiska samtal och coachning. Jag jobbar med 6 nycklar som är en
            del av “storstädningen”, grundad av Helena Broander i go Beyond.
            Kanske kan du hitta de där livet du inte visste du ville leva.
          </p>
        </div>
      </article>
    </section>
  );
};

export default CoachingInfo;
