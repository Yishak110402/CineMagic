import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h3>Latest</h3>
        <h1>Discover New Movies Today</h1>
        <p>Explore the latest blockbuster movies and book tickets online</p>
      </div>
    </div>
  );
}
