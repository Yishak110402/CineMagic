import styles from "./Features.module.css";

export default function Features() {
  return (
    <div className={styles.features}>
      <h1>Discover the Magic of Online Ticket Booking</h1>
      <div className={styles.featuresContainer}>
        <div>
            <img src="./assets/cinemappl.jpg"/>
          <h1>Experience Special Event and Movie Premieres</h1>
          <p>Join us for exclusive screenings, red-carpet events, and more</p>
        </div>
        <div>
            <img src="./assets/popcorn.jpg"/>
          <h1>Enjoy a Premium Movie Experience With VIP Seating</h1>
          <p>Upgrade your movie experience with VIP Seatings</p>
        </div>
      </div>
    </div>
  );
}
