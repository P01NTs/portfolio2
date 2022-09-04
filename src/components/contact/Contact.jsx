import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_43hxema",
        "template_jt8gp4b",
        form.current,
        "ys5pCfudDZJSv_SPJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          console.log(done);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="scroll-snap container contact__container">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="contact__wrapper">
        <div className="contact__links">
          <article>
            <i className="fa-solid fa-envelope"></i>
            <h4>Email</h4>
            <h5 className="text-light">bou-wassim@live.fr</h5>
            <a href="mailto:bou-wassim@live.fr">Send a message</a>
          </article>
          <article>
            <i className="fa-brands fa-facebook-messenger"></i>
            <h4>Messenger</h4>
            <h5 className="text-light">Moh Boutarfa</h5>
            <a
              href="https://m.me/moh.diablotin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article>
            <i className="fa-brands fa-whatsapp"></i>
            <h4>WhatsApp</h4>
            <h5 className="text-light">+213782360153</h5>
            <a
              href="https://api.whatsapp.com/send?phone+213782360153/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <input
            required
            type="text"
            placeholder="Your Full Name"
            name="from_name"
            id="from_name"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            name="from_email"
            id="from_email"
          />
          <textarea
            required
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder="Your Message"
          ></textarea>
          <input
            type={done ? "button" : "submit"}
            value={done ? "Message Sent !" : "Send Message"}
            className={
              done ? "btn" : "btn btn-primary"
            }
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
