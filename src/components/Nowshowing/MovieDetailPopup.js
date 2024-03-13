import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./MovieDetailPopup.module.css";
import { useEffect, useState } from "react";

export default function MovieDetailPopup({ selectedMovie }) {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(function () {
    async function getDetails() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=1f7f89f6&i=${id}&plot=full`
        );
        if (!res.ok) throw new Error("Can't Load Data");
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, []);
  return (
    <div className={styles.container}>
      {loading && error == null && <Loader />}
      {error && <Error error={error}/>}
      {!loading && !error && movie !== null && (<Details movie={movie} />)}
    </div>
  );
}

function Details({movie}){
    console.log(movie);
    const navigate = useNavigate()
    return(
        <div style={{backgroundImage:`url(${movie.Poster})`}} className={styles.popup}>
            <button onClick={(e)=>{
                e.preventDefault();
                navigate(-1)
            }} className={styles.backBtn}>&larr;</button>
            <span className={styles.shade}></span>
            <div className={styles.header}>
                <img src={movie.Poster}/>
                <div>
                    <h1>{movie.Title}</h1>
                    <p>Starring: {movie.Actors}</p>
                    <p>Director: {movie.Director}</p>
                    <p>Genre: {movie.Genre}</p>
                    <p>Rated: {movie.Rated}</p>
                    <p>Release Date: {movie.Released} </p>
                    <p>Runtime: {movie.Runtime}</p>
                    <p>Language: {movie.Language}</p>
                    <p>Rating: {movie.imdbRating}/10</p>
                </div>
            </div>
            <div className={styles.plot}>
                <h2>Plot</h2>
                <p>{movie.Plot}</p>
            </div>
            <div className={styles.book}>
                <h1>Book your ticket now</h1>
               <Link to="/booktickets"><button>Book Now</button></Link>
            </div>
        </div>
    )
}

function Error({ error }) {
  return <div className={styles.error}><h1>{error}</h1></div>;
}

function Loader() {

  return<div className="loaderContainer"><div className="loader"></div></div>;
}
