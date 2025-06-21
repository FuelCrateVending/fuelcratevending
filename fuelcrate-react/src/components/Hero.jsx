import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero} ${styles.flex} ${styles.column} ${styles.center} ${styles.textCenter}`}>
      <h1>
        Healthy Fuel.<br />Anywhere&nbsp;You&nbsp;Work&nbsp;or&nbsp;Train.
      </h1>
      <p>
        Smart micro-markets stocked with protein-packed snacks, fresh meals, and recovery drinks—managed remotely, always ready.
      </p>
      <a href="#host" className={`${styles.btn} ${styles.btnPrimary}`}>Bring FuelCrate to My Facility</a>
    </section>
  );
}
