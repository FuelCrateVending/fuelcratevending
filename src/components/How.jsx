import React from 'react';
import styles from './How.module.css';

export default function How() {
  return (
    <section id="how" className={`${styles.how} ${styles.container} ${styles.textCenter}`}>
      <h2>How FuelCrate Works</h2>
      <div className={`${styles.gridAuto} ${styles.gapLg}`}>
        <div className={styles.step}>
          <h3>1. Tap &amp; Go</h3>
          <p>Open the door with a contactless card or phone—no app required.</p>
        </div>
        <div className={styles.step}>
          <h3>2. Grab Your Fuel</h3>
          <p>Sensors track what you pick. Choose from protein bars, fresh bowls, hydration, and more.</p>
        </div>
        <div className={styles.step}>
          <h3>3. Smart Checkout</h3>
          <p>Close the door. Micromart charges you automatically and emails a receipt.</p>
        </div>
      </div>
    </section>
  );
}
