import { useEffect, useState } from "react";
import styles from "./ShowingList.module.css";
import { Link } from "react-router-dom";

export default function ShowingList({nowShowing}) {
  

  const [showStatus, setShowStatus] = useState(false);
  let tempShow = [];
  if (showStatus == true) {
    tempShow = nowShowing;
  } else {
    tempShow = nowShowing.slice(0, 3);
  }
  return (
    <div className={styles.showingListContainer}>
      <div className={styles.moviess}>
      {tempShow.map((id) => (
        <ShowingMovie id={id} />
      ))}
        </div>
      <button
        onClick={() => setShowStatus((s) => !s)}
        className={styles.viewAllBtn}
      >
        {showStatus ? <>Hide List</> : <>Show All</>}
      </button>
    </div>
  );
}

function ShowingMovie({ id }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    async function getmovieDetails() {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=1f7f89f6&i=${id}`
      );
      if (!res.ok) {
        throw new Error("Loading");
      }
      const data = await res.json();
      setSelectedMovie(data);
      setLoading(false);
    }
    getmovieDetails();
  }, []);

  return (
    <div className={styles.moviesList}>
      {selectedMovie !== null ? (
        <>
          <img src={selectedMovie.Poster} />
          <div>
            <h1>Title: {selectedMovie.Title}</h1>
            <p>Release Date:{selectedMovie.Released}</p>
            <p>Starring: {selectedMovie.Actors}</p>
            <p>Duration: {selectedMovie.Runtime}</p>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.bookBtn}>Book Ticket</button>
            <Link to={`/nowshowing/${id}`}>
              <button className={styles.detailBtn}>See details</button>
            </Link>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

function Loader() {
  return <p className="loader"></p>;
}
