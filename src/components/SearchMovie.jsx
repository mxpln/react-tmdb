import React, { useState } from "react";
import MovieCard from "./MovieCard";

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  
  
  const API_KEY = "d62996ed41cbe01792dd1637f92e64bd";
  const SearchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
   
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      // console.log(data.results)
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <>
      <form className="form" onSubmit={SearchMovies}>
        <label className="label" htmlFor="query">
          Movie Name:
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="search a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" disabled={!query}>Search</button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.popularity)
          .map((movie) => (
            <>
            
            <MovieCard movie={movie} key={movie.id}  />
            </>
          ))}
      </div>
    </>
  );
};
export default SearchMovie;
