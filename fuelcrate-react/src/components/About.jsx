import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`${styles.about} ${styles.container} ${styles.grid}`}>
      <div>
        <h2>Our Mission</h2>
        <p>FuelCrate delivers convenient, nutritious options for people who push their limits—whether at the gym, the office, or en route to the next adventure.</p>
        <p>We curate high-quality products, prioritize dietary transparency, and leverage Micromart technology for seamless, touch-free experiences.</p>
      </div>
      <img src="https://picsum.photos/seed/crate/600/400" alt="FuelCrate display" className={styles.responsive} />
    </section>
  );
}
