import axios from "axios";
import { useState, useEffect } from "react";

const Card = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=d62996ed41cbe01792dd1637f92e64bd&language=en-US&page=1";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      //   console.log(res.data);
      setMovies(res.data.results);
    });
  }, []);
  return (
    <div>
      <h2>Movie #1</h2>
      <ul>
        {movies.map((movie) => {
          <li>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
