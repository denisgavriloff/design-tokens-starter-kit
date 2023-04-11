import styles from './Card.module.css';

type TCardProps = {
  title: string;
  thumbnail: string;
  description: string;
};

export const Card = ({ title, thumbnail, description }: TCardProps) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <img src={thumbnail} className={styles.thumbnail} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
