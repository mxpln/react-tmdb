import React, {useState} from "react";
export default function MovieCard({ movie }) {
  // const [related, setRelated] = useState([])
  const getRelated = async (e) => {
    e.preventDefault();
    // console.log("submitting");
   
    const RELATED_URL = `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=d62996ed41cbe01792dd1637f92e64bd&language=en-US&page=1`
    try {
      const res = await fetch(RELATED_URL);
      const data = await res.json();
      // setRelated(movie.id);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="card" key={movie.id}>
      <div className="card-content">
        <h3 className="card-title">{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card-desc">{movie.overview}</p>
        <a onClick={getRelated}>related</a>
        
      </div>
    </div>
  );
}
