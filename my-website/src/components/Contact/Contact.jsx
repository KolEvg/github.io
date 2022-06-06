import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>evgeniykoluschinskiy@gmail.com</h5>
            <a href="mailto:evgeniykoluschinskiy@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>Message</h5>
            <a href="https://t.me/SkiPPy43" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Contact me</h5>
            <a href="https://wa.me/+79136499599" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
