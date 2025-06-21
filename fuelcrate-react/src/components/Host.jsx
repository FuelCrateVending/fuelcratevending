import React from 'react';
import styles from './Host.module.css';

export default function Host() {
  return (
    <section id="host" className={`${styles.host} ${styles.flex} ${styles.column} ${styles.center} ${styles.textCenter}`}>
      <h2>Upgrade Your Space with FuelCrate</h2>
      <p>No maintenance, no hassle—just happier, healthier members and employees.</p>
      <div className={`${styles.gridAuto} ${styles.gapMd}`}>
        <div className={styles.pill}>Zero Up‑Front Cost</div>
        <div className={styles.pill}>Remote Inventory &amp; Support</div>
        <div className={styles.pill}>Contactless Payments</div>
        <div className={styles.pill}>Curated Healthy Selection</div>
      </div>
      <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>I’m Interested</a>
    </section>
  );
}
