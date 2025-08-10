import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    function handleKeydown(event) {
      if (event.key === 'Escape') {
        setIsNavOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.flex} ${styles.spaceBetween}`}>
        <a href="#" className={styles.logo}>FuelCrate</a>
        <nav className={styles.nav} id="nav" data-open={isNavOpen ? 'true' : 'false'}>
          <ul className={`${styles.flex} ${styles.gapLg}`} onClick={() => setIsNavOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#host">Host FuelCrate</a></li>
            <li><a href="#contact" className={styles.btn}>Contact</a></li>
          </ul>
        </nav>
        <button
          id="navToggle"
          className={styles.navToggle}
          aria-label="Menu"
          aria-controls="nav"
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((o) => !o)}
        />
      </div>
    </header>
  );
}
