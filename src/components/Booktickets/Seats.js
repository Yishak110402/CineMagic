import { useEffect, useState } from "react";
import styles from "./Seats.module.css";

export default function Seats({ selected, setSelected,handleBooked, occupiedSeats }) {
  const [mode, setMode] = useState("book");

  useEffect(function(){
    setMode("book")
  },[selected, setSelected])

  function handleselected(e) {
    if (e.target.innerText.length > 3) return;
    if(occupiedSeats.includes(e.target.innerText)){
      alert("Seat is taken")
      return
    }
    if (selected.includes(e.target.innerText)) {
      setSelected((b) => b.filter((seat) => seat !== e.target.innerText));
    } else {
      setSelected((b) => [...b, e.target.innerText]);
    }
  }


  return (
    <div className={styles.seatsContainer}>
      <div className={styles.seats} onClick={(e) => handleselected(e)}>
        <div className={styles.row}>
          <div className={selected.includes("A1") ? "selected":""} id={occupiedSeats.includes("A1") ? "takenSeat": ""}>A1</div>
          <div className={selected.includes("A2") ? "selected":""}id={occupiedSeats.includes("A2") ? "takenSeat": ""}>A2</div>
          <div className={selected.includes("A3") ? "selected":""}id={occupiedSeats.includes("A3") ? "takenSeat": ""}>A3</div>
          <div className={selected.includes("A4") ? "selected":""}id={occupiedSeats.includes("A4") ? "takenSeat": ""}>A4</div>
          <div className={selected.includes("A5") ? "selected":""}id={occupiedSeats.includes("A5") ? "takenSeat": ""}>A5</div>
          <div className={selected.includes("A6") ? "selected":""}id={occupiedSeats.includes("A6") ? "takenSeat": ""}>A6</div>
          <div className={selected.includes("A7") ? "selected":""}id={occupiedSeats.includes("A7") ? "takenSeat": ""}>A7</div>
          <div className={selected.includes("A8") ? "selected":""}id={occupiedSeats.includes("A8") ? "takenSeat": ""}>A8</div>
          <div className={selected.includes("A9") ? "selected":""}id={occupiedSeats.includes("A9") ? "takenSeat": ""}>A9</div>
          <div className={selected.includes("A10") ? "selected":""}id={occupiedSeats.includes("A10") ? "takenSeat": ""}>A10</div>
        </div>
        <div className={styles.row}>
          <div className={selected.includes("B1") ? "selected":""}id={occupiedSeats.includes("B1") ? "takenSeat": ""}>B1</div>
          <div className={selected.includes("B2") ? "selected":""}id={occupiedSeats.includes("B2") ? "takenSeat": ""}>B2</div>
          <div className={selected.includes("B3") ? "selected":""}id={occupiedSeats.includes("B3") ? "takenSeat": ""}>B3</div>
          <div className={selected.includes("B4") ? "selected":""}id={occupiedSeats.includes("B4") ? "takenSeat": ""}>B4</div>
          <div className={selected.includes("B5") ? "selected":""}id={occupiedSeats.includes("B5") ? "takenSeat": ""}>B5</div>
          <div className={selected.includes("B6") ? "selected":""}id={occupiedSeats.includes("B6") ? "takenSeat": ""}>B6</div>
          <div className={selected.includes("B7") ? "selected":""}id={occupiedSeats.includes("B7") ? "takenSeat": ""}>B7</div>
          <div className={selected.includes("B8") ? "selected":""}id={occupiedSeats.includes("B8") ? "takenSeat": ""}>B8</div>
          <div className={selected.includes("B9") ? "selected":""}id={occupiedSeats.includes("B9") ? "takenSeat": ""}>B9</div>
          <div className={selected.includes("B10") ? "selected":""} id={occupiedSeats.includes("B10") ? "takenSeat": ""}>B10</div>
        </div>
        <div className={styles.row}>
          <div className={selected.includes("C1") ? "selected":""}id={occupiedSeats.includes("C1") ? "takenSeat": ""}>C1</div>
          <div className={selected.includes("C2") ? "selected":""}id={occupiedSeats.includes("C2") ? "takenSeat": ""}>C2</div>
          <div className={selected.includes("C3") ? "selected":""}id={occupiedSeats.includes("C3") ? "takenSeat": ""}>C3</div>
          <div className={selected.includes("C4") ? "selected":""}id={occupiedSeats.includes("C4") ? "takenSeat": ""}>C4</div>
          <div className={selected.includes("C5") ? "selected":""}id={occupiedSeats.includes("C5") ? "takenSeat": ""}>C5</div>
          <div className={selected.includes("C6") ? "selected":""}id={occupiedSeats.includes("C6") ? "takenSeat": ""}>C6</div>
          <div className={selected.includes("C7") ? "selected":""}id={occupiedSeats.includes("C7") ? "takenSeat": ""}>C7</div>
          <div className={selected.includes("C8") ? "selected":""}id={occupiedSeats.includes("C8") ? "takenSeat": ""}>C8</div>
          <div className={selected.includes("C9") ? "selected":""}id={occupiedSeats.includes("C9") ? "takenSeat": ""}>C9</div>
          <div className={selected.includes("C10") ? "selected":""}id={occupiedSeats.includes("C10") ? "takenSeat": ""}>C10</div>
        </div>
        <div className={styles.row}>
          <div className={selected.includes("D1") ? "selected":""}id={occupiedSeats.includes("D1") ? "takenSeat": ""}>D1</div>
          <div className={selected.includes("D2") ? "selected":""}id={occupiedSeats.includes("D2") ? "takenSeat": ""}>D2</div>
          <div className={selected.includes("D3") ? "selected":""}id={occupiedSeats.includes("D3") ? "takenSeat": ""}>D3</div>
          <div className={selected.includes("D4") ? "selected":""}id={occupiedSeats.includes("D4") ? "takenSeat": ""}>D4</div>
          <div className={selected.includes("D5") ? "selected":""}id={occupiedSeats.includes("D5") ? "takenSeat": ""}>D5</div>
          <div className={selected.includes("D6") ? "selected":""}id={occupiedSeats.includes("D6") ? "takenSeat": ""}>D6</div>
          <div className={selected.includes("D7") ? "selected":""}id={occupiedSeats.includes("D7") ? "takenSeat": ""}>D7</div>
          <div className={selected.includes("D8") ? "selected":""}id={occupiedSeats.includes("D8") ? "takenSeat": ""}>D8</div>
          <div className={selected.includes("D9") ? "selected":""}id={occupiedSeats.includes("D9") ? "takenSeat": ""}>D9</div>
          <div className={selected.includes("D10") ? "selected":""}id={occupiedSeats.includes("D10") ? "takenSeat": ""}>D10</div>
        </div>
        <div className={styles.row}>
          <div className={selected.includes("E1") ? "selected":""}id={occupiedSeats.includes("E1") ? "takenSeat": ""}>E1</div>
          <div className={selected.includes("E2") ? "selected":""}id={occupiedSeats.includes("E2") ? "takenSeat": ""}>E2</div>
          <div className={selected.includes("E3") ? "selected":""}id={occupiedSeats.includes("E3") ? "takenSeat": ""}>E3</div>
          <div className={selected.includes("E4") ? "selected":""}id={occupiedSeats.includes("E4") ? "takenSeat": ""}>E4</div>
          <div className={selected.includes("E5") ? "selected":""}id={occupiedSeats.includes("E5") ? "takenSeat": ""}>E5</div>
          <div className={selected.includes("E6") ? "selected":""}id={occupiedSeats.includes("E6") ? "takenSeat": ""}>E6</div>
          <div className={selected.includes("E7") ? "selected":""}id={occupiedSeats.includes("E7") ? "takenSeat": ""}>E7</div>
          <div className={selected.includes("E8") ? "selected":""}id={occupiedSeats.includes("E8") ? "takenSeat": ""}>E8</div>
          <div className={selected.includes("E9") ? "selected":""}id={occupiedSeats.includes("E9") ? "takenSeat": ""}>E9</div>
          <div className={selected.includes("E10") ? "selected":""}id={occupiedSeats.includes("E10") ? "takenSeat": ""}>E10</div>
        </div>
      </div>
      <div
        className={styles.selectedList}
        style={{ opacity: selected.length !== 0 ? 1 : 0 }}
      >
        <SelectedSeats mode={mode} setMode={setMode} selected={selected} handleBooked={handleBooked} />
      </div>
    </div>
  );
}

function SelectedSeats({ selected, mode, setMode, handleBooked }) {
  return (
    <>
      {mode == "book" && (
        <>
          <h3>Selected Seats</h3>
          {selected.map((seat) => (
            <li>{seat}</li>
          ))}
          <button onClick={()=>(setMode("bill"))} className={styles.bookBtn}>Book</button>
        </>
      )}
      {
        mode === "bill" && 
        <>
        <button onClick={()=>(setMode("book"))} className={styles.backBtn}>&larr;</button>
        <h3>Total bill</h3>
        <br/>
        <p>{selected.length} * $20</p>
        <p>VAT(15%): ${(selected.length*20*15)/100}</p>
        <p>Total:${(selected.length*20)+((selected.length*20*15)/100)}</p>
        <button onClick={(e)=>(handleBooked(e))} className={styles.payBtn}>Pay</button>
        </>
      }
    </>
  );
}
