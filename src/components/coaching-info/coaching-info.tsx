import React from "react";
import { scrollToId } from "../../domain/core/animations";
import { BiBody, BiConversation, BiPhoneCall } from "react-icons/bi";

const CoachingInfo: React.FC = () => {
    return (
        <section id="coach-component" className="coach-info-component">
            <article className="coach-info-article">
                <div className="theme-section-small">
                    <h1 className="title">Livscoach</h1>
                </div>
                <div className="what-is-coach section-padding">
                    <h2>Vad är en livscoach?</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Vero odio soluta iusto reiciendis, labore amet
                        velit totam maxime asperiores quibusdam harum atque
                        incidunt perferendis aperiam sequi quis exercitationem
                        eligendi consectetur.
                    </p>
                </div>
                <div id="session-details-component" className="session-details section-padding">
                    <div>
                        <div className="session-row">
                            <div className="session-row-header">
                                <BiConversation />
                                <h2 className="title">Konversation</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur eos dolorum eaque
                                excepturi, natus facilis sequi molestiae quam
                                consequuntur rem voluptatibus a qui?
                            </p>
                        </div>
                        <div className="session-row">
                            <div className="session-row-header">
                                <BiPhoneCall />
                                <h2 className="title">Telefonsamtal</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur eos dolorum eaque
                                excepturi, natus facilis sequi molestiae quam
                                consequuntur rem voluptatibus a qui?
                            </p>
                        </div>
                        <div className="session-row">
                            <div className="session-row-header">
                                <BiBody />
                                <h2 className="title">Möte</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur eos dolorum eaque
                                excepturi, natus facilis sequi molestiae quam
                                consequuntur rem voluptatibus a qui?
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
                </div>
            </article>
        </section>
    );
};

export default CoachingInfo;
