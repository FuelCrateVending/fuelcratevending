import { applyTheme, isDarkPreferred } from '../theme.js';
import styles from './Header.module.css';

function ThemeToggle() {
  return (
    <button
      className={styles.themeToggle}
      aria-label="Toggle dark mode"
      onClick={() => applyTheme(!isDarkPreferred())}
    >
      🌓
    </button>
  );
}

export default ThemeToggle;
