import styles from './Card.module.css';

export interface CardProps {
  description: string;
  imgSrc: string;
  title: string;
}

export const Card = ({ description, imgSrc, title }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <img src={imgSrc} className={styles.thumbnail} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
