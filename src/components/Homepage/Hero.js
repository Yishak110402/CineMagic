import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Experience the Magic of CineMagic today</h1>
      <p>Discover the latest blockbusters and featured movies at CineMagic</p>
      <HeroImages />
    </div>
  );
}

function HeroImages() {
  return (
    <div className={styles.imgContainer}>
        <span className={styles.shade}></span>
      <div className={styles.first}>
        <img src="./assets/insideout.png" alt="Inside Out Poster" />
        <img src="./assets/avengersendgame.jpeg" alt="" />
        <img src="./assets/centralintelligence.png" alt="" />
        <img src="./assets/oppenheimer.png" alt="" />
        <img src="./assets/captainamerica.png"/>
      </div>
      <div className={styles.second}>
      <img src="./assets/tenet.png" alt="" />
      <img src="./assets/thedarknight.png" alt="" />
      <img src="./assets/thehangover.png" alt="" />
      <img src="./assets/thelionking.png" alt="" />
      </div>
    </div>
  );
}
