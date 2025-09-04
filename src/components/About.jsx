import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`${styles.about} ${styles.container} ${styles.grid}`}>
      <div>
        <h2>Our Mission</h2>
        FuelCrate makes it easy for businesses to offer healthy, reliable refreshment solutions. 
        With transparent sourcing, quality products, and advanced Micromart technology, we handle everything—so you can focus on your business while we fuel your people.</p>
      </div>
      <img src="https://picsum.photos/seed/crate/600/400" alt="FuelCrate display" className={styles.responsive} loading="lazy" />
    </section>
  );
}
