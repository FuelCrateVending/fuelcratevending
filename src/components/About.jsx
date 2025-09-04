import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`${styles.about} ${styles.container} ${styles.grid}`}>
      <div>
        <h2>Our Mission</h2>
        <p>FuelCrate makes it easy for businesses to offer healthy, reliable refreshment solutions. 
        With transparent sourcing, quality products, and advanced Micromart technology, we handle everything—so you can focus on your business while we fuel your people.</p>
      </div>
      <img src="public\images\Micromart-Smart-Store-transparent.png" alt="FuelCrate display" className={styles.responsive} loading="lazy" />
    </section>
  );
}
