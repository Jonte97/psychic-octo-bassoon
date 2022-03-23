import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm("", "", e.target as HTMLFormElement, "").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact" className="contact-component">
      <div className="contact-header theme-section-small">
        <h1 className="title">Kontakta mig</h1>
      </div>
      <div className="form-wrapper">
        <form
          ref={form}
          onSubmit={(e) => {
            sendEmail(e);
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
              <span className="content-name-email content-name">E-post</span>
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
              <span className="content-name-subject content-name">Ämne</span>
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
            <input type="submit" className="btn-submit" value="Skicka" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
