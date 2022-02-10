import React from "react";
import { scrollToId } from "../../domain/core/animations";
import PriceCard from "../pricing/price-card";

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
        {/* //!Should delete om hon inte verkligen vill ha kvar den */}
        {/* <div
          id="session-details-component"
          className="session-details section-padding"
        >
          <div>
            <div className="session-row text-section">
              <div className="session-row-header">
                <BiConversation />
                <h2 className="title">Konversation</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur eos dolorum eaque excepturi, natus facilis sequi
                molestiae quam consequuntur rem voluptatibus a qui?
              </p>
            </div>
            <div className="session-row text-section">
              <div className="session-row-header">
                <BiPhoneCall />
                <h2 className="title">Telefonsamtal</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur eos dolorum eaque excepturi, natus facilis sequi
                molestiae quam consequuntur rem voluptatibus a qui?
              </p>
            </div>
            <div className="session-row text-section">
              <div className="session-row-header">
                <BiBody />
                <h2 className="title">Möte</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur eos dolorum eaque excepturi, natus facilis sequi
                molestiae quam consequuntur rem voluptatibus a qui?
              </p>
            </div>
            <nav>
              <a
                className="contact-link btn btn-primary"
                onClick={() => {
                  scrollToId("contact");
                }}
              >
                Kontakta mig!
              </a>
            </nav>
          </div>
        </div> */}
      </article>
    </section>
  );
};

export default CoachingInfo;
