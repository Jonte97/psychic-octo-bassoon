import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-component">
            <div className="contact-header">
                <h1 className="dance-script-headline">Kontakta mig</h1>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="mail-form"
            >
                <div className="form-element">
                    <input
                        name="email"
                        type="text"
                        className="email-input"
                        required
                        autoComplete="off"
                    />
                    <label className="email-label" htmlFor="email">
                        <span className="content-name-email content-name">
                            E-post
                        </span>
                    </label>
                </div>
                <div className="form-element">
                    <input
                        name="subject"
                        type="text"
                        className="subject-input"
                        required
                    />
                    <label htmlFor="email" className="subject-label">
                        <span className="content-name-subject content-name">
                            Ämne
                        </span>
                    </label>
                </div>
                <div className="form-element-textarea">
                    <label htmlFor="message">
                        <span>Meddelande</span>
                    </label>
                    <textarea
                        placeholder="Vad kan jag hjälpa dig med..."
                        className="text-area"
                        name="message"
                    ></textarea>
                </div>
                <div className="submit-wrapper">
                    <input
                        type="submit"
                        className="btn-submit"
                        value="Skicka"
                    />
                </div>
            </form>
        </section>
    );
};

export default Contact;
