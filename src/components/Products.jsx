import React from 'react';
import styles from './Products.module.css';

export default function Products() {
  return (
    <section id="products" className={`${styles.products} ${styles.container}`}>
      <h2>What’s Inside the Crate?</h2>
      <ul className={`${styles.gridAuto} ${styles.gapMd} ${styles.cardList}`}>
        <li className={styles.card}>
          <img src="https://picsum.photos/seed/protein/400/300" alt="Protein snacks" />
          <h3>Protein Snacks</h3>
        </li>
        <li className={styles.card}>
          <img src="https://picsum.photos/seed/meal/400/300" alt="Fresh meals" />
          <h3>Fresh Meals</h3>
        </li>
        <li className={styles.card}>
          <img src="https://picsum.photos/seed/drinks/400/300" alt="Recovery drinks" />
          <h3>Recovery Drinks</h3>
        </li>
        <li className={styles.card}>
          <img src="https://picsum.photos/seed/glutenfree/400/300" alt="Gluten-free options" />
          <h3>Gluten‑Free Options</h3>
        </li>
      </ul>
    </section>
  );
}
