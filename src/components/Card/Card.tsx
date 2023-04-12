import styles from './Card.module.css';

export interface CardProps {
  description: string;
  imgAlt: string;
  imgSrc: string;
  title: string;
}

export const Card = ({ description, imgAlt, imgSrc, title }: CardProps) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <img src={imgSrc} alt={imgAlt} className={styles.thumbnail} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
