import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} ${styles.container}`}>
      <h2>Contact Us</h2>
      <form className={`${styles.contactForm} ${styles.flex} ${styles.column}`} action="https://formspree.io/f/yourID" method="POST">
        <label>
          Name<input type="text" name="name" required />
        </label>
        <label>
          Email<input type="email" name="email" required />
        </label>
        <label>
          Facility Type
          <select name="facility">
            <option>Gym</option>
            <option>Office</option>
            <option>Clinic</option>
            <option>Apartment</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Message<textarea name="message" rows="4"></textarea>
        </label>
        <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit">Send</button>
      </form>
    </section>
  );
}
