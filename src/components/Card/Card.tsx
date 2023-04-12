import styles from './Card.module.css';

export interface CardProps {
  title: string;
  thumbnail: string;
  description: string;
}

export const Card = ({ title, thumbnail, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <img src={thumbnail} className={styles.thumbnail} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
