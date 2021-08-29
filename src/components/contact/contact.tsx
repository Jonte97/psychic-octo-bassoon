import React from "react";

const Contact: React.FC = () => {
    const emailInput = React.useRef<HTMLInputElement | null>(null);

    const onFocus = (elementId: string) => {};

    return (
        <section className="contact-component">
            <div className="contact-header">
                <h1 className="dance-script-headline">Kontakta mig</h1>
            </div>
            <form>
                <div className="form-element">
                    <input
                        name="email"
                        type="text"
                        className="email-input"
                        ref={emailInput}
                        required
                        onFocus={() => onFocus(emailInput.current!.name)}
                        autoComplete="off"
                    />
                    <label className="email-label" htmlFor="email">
                        <span className="content-name-email">E-post</span>
                    </label>
                </div>
                <div className="form-element">
                    <input name="subject" type="text" />
                    <label htmlFor="email">Ämne</label>
                </div>
                <div className="form-element">
                    <label htmlFor="message">Övrigt</label>
                    <textarea
                        className="form-element"
                        name="message"
                    ></textarea>
                </div>
                <input type="submit" />
            </form>
        </section>
    );
};

export default Contact;
