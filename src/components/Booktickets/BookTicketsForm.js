import { useEffect, useState } from "react";
import BookOptions from "./BookOptions";
import styles from "./BookTicketsForm.module.css";
import Seats from "./Seats";
import TicketFilter from "./TicketFilter";

export default function BookTicketsForm({ nowShowing }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState([]);
  const [booked, setBooked] = useState([]);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [wantedMovie, setWantedMovie] = useState("none");
  const [filtered, setFiltered] = useState([]);
  const [occupiedSeats, setOccupiedSeats] = useState([]);

  function handleBooked(e) {
    e.preventDefault();
    if (
      fName == "" ||
      lName == "" ||
      phoneNum == "" ||
      email == "" ||
      wantedMovie == "none"
    ) {
      alert("Please fill out all the required sections");
      return;
    }
    setBooked((b) => [
      ...b,
      {
        fName: fName,
        lName: lName,
        phoneNum: phoneNum,
        email: email,
        movie: wantedMovie,
        bookedSeats: selected,
        billId: Date.now(),
      },
    ]);

    setFName("");
    setLName("");
    setEmail("");
    setPhoneNum("");
    setSelected([]);
  }

  useEffect(
    function () {
      if (filter == "All") {
        setFiltered(booked);
      } else {
        setFiltered(booked.filter((ticket) => ticket.movie == filter));
      }
    },
    [filter, booked]
  );

  useEffect(
    function () {
      const filteredBooked = booked.filter(
        (ticket) => ticket.movie === wantedMovie
      );
      const bookedSeatsArrays = filteredBooked.map(
        (ticket) => ticket.bookedSeats
      );
      const bookedSeat = bookedSeatsArrays.flat();
      setOccupiedSeats(bookedSeat);
    },
    [wantedMovie, booked]
  );

  return (
    <div className={styles.bookForm}>
      <h1>Book Here</h1>
      <p>Select the movie, date, time, and number of tickets</p>
      <form className={styles.form}>
        <div className={styles.formContainer}>
          <div>
            <label>First Name</label>
            <input
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              type="text"
              required
            />
            <label>Last Name</label>
            <input
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              type="text"
              required
            />
          
          </div>
          <div>
          <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required
            />
            <label>Phone Number</label>
            <input
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              type="text"
              required
            />
          </div>
        </div>
        <div>
          <span>Choose a movie</span>
          <BookOptions
            setWantedMovie={setWantedMovie}
            wantedMovie={wantedMovie}
            nowShowing={nowShowing}
          />
        </div>
        <Seats
          selected={selected}
          setSelected={setSelected}
          handleBooked={handleBooked}
          occupiedSeats={occupiedSeats}
        />
      </form>
      {/* <div className={styles.bookedDetails}>
        <h1>Booked Ticket Details</h1>
        <TicketFilter
          nowShowing={nowShowing}
          filter={filter}
          setFilter={setFilter}
        />
        <table border={1}>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Booked movie</th>
            <th>Booked Seats</th>
          </thead>
          {filtered.map((ticket) => (
            <tr>
              <td>{ticket.fName}</td>
              <td>{ticket.lName}</td>
              <td>{ticket.email}</td>
              <td>{ticket.phoneNum}</td>
              <td>{ticket.movie}</td>
              <td>
                {ticket.bookedSeats.map((seat) => (
                  <>
                    <span>{seat}</span>, 
                  </>
                ))}
              </td>
            </tr>
          ))}
        </table>
      </div> */}
    </div>
  );
}
