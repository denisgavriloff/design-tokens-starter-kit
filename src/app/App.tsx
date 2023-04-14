import { Card } from 'components';
import mockCardsData from './mockCardsData';
import arvatoSystemsLogo from 'assets/arvato-systems-logo.jpg';
import weyWeyWebLogo from 'assets/wey-wey-web-logo.png';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={arvatoSystemsLogo} alt="Arvato Systems logo" className={styles.logo} />
        <h1 className={styles.appTitle}>Design Tokens Demo</h1>
        <img src={weyWeyWebLogo} alt="Wey Wey Web logo" className={styles.logo} />
      </header>
      <main className={styles.main}>
        <h2>A Visual Recap of Malaga and "Wey Wey Web" conference</h2>
        <div className={styles.cards}>
          {mockCardsData.map((card) => (
            <Card
              key={card.id}
              description={card.description}
              imgSrc={card.imgSrc}
              title={card.title}
            />
          ))}
        </div>
      </main>
      <footer className={styles.footer}>Made with ❤️</footer>
    </div>
  );
};

export default App;
