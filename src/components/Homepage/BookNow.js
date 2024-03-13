import { NavLink } from "react-router-dom";
import styles from "./BookNow.module.css";

export default function BookNow() {
  return (
    <div
      style={{ backgroundImage: `url("./assets/cinemastage.jpg")` }}
      className={styles.bookNow}
    >
      <div>
        <span className={styles.shade} />
        <h1>Book your Movie Tickets Now</h1>
        <p>
          Experience the latest blockbuster movies at CineMagic. Book your
          tickets now
        </p>
       <NavLink to="/nowshowing"><Button/></NavLink> 
      </div>
    </div>
  );
}

function Button(){
    return <button>Book</button>
}