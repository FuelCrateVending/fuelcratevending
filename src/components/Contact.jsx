import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
  const action = formspreeId ? `https://formspree.io/f/${formspreeId}` : undefined;

  function handleSubmit(e) {
    if (!action) {
      e.preventDefault();
      alert('Form endpoint not configured. Set VITE_FORMSPREE_ID in your environment.');
    }
  }

  return (
    <section id="contact" className={`${styles.contact} ${styles.container}`}>
      <h2>Contact Us</h2>
      <form className={`${styles.contactForm} ${styles.flex} ${styles.column}`} action={action} method="POST" onSubmit={handleSubmit}>
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
