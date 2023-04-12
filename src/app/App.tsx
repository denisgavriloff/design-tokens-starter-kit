import styles from './App.module.css';
import arvatoSystemsLogo from 'assets/arvato-systems-logo.jpg';
import weyWeyWebLogo from 'assets/wey-wey-web-logo.png';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={arvatoSystemsLogo} alt="Arvato Systems logo" className={styles.logo} />
        <h1 className={styles.appTitle}>Design Tokens Demo</h1>
        <img src={weyWeyWebLogo} alt="Wey Wey Web logo" className={styles.logo} />
      </header>
      <main className={styles.main}>Main</main>
      <footer className={styles.footer}>Made with ❤️</footer>
    </div>
  );
};

export default App;
