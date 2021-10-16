import React from "react";

const Movies = ({ original_title, overview, poster_path }) => {
  
  return (
    
    <div className="each-recipe">
      <h2>{original_title}</h2>
      <p>{overview}</p>
      <img src={poster_path} />
    </div>
  );
  
};

export default Movies;
