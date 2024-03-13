import { useState } from "react";
import styles from "./FAQs.module.css";

export default function FAQs() {
  return (
    <div className={styles.FAQs}>
      <h1>Frequently Asked Questions</h1>
      <p>
        Find answers to common questions asked about movie ratings, ticket
        bookings, age restrictions, and more
      </p>
      <Accordion
        question="What are movie ratings?"
        answer="Movie ratings are a to provide guidance about the content of a movie. They help viewers make informed decisions about what movies are suitable for them or their children"
      />
      <Accordion
        question="How can I book tickets?"
        answer="Booking tickets is easy! Simply visit  our website, select the movie you want to watch, choose your preferred showtime, and follow the prompts to complete your booking"
      />
      <Accordion
        question="Are there age restrictions?"
        answer="Yes, some movies may have age restrictions. Age restrictions are put in place to ensure that viwers are of an appropriate age to understand and handle the content of th movie"
      />
    </div>
  );
}

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.question}>
        <p>{question}</p>
        <span onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? <>-</> : <>+</>}
        </span>
      </div>
      {isOpen && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
