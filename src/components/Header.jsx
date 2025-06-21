import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.flex} ${styles.spaceBetween}`}>
        <a href="#" className={styles.logo}>FuelCrate</a>
        <nav className={styles.nav} id="nav">
          <ul className={`${styles.flex} ${styles.gapLg}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#host">Host FuelCrate</a></li>
            <li><a href="#contact" className={styles.btn}>Contact</a></li>
          </ul>
        </nav>
        <button id="navToggle" className={styles.navToggle} aria-label="Menu" />
      </div>
    </header>
  );
}
