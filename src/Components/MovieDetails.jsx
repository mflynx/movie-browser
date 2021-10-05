import React from "react";

const MovieDetails = (props) => {
  const movie = props.movie;
  return movie ? (
    <div className="details">
      <h2>and the details here</h2>
      <h3>{movie.title}</h3>
      <img src="{movie.poster_path}" alt="poster" />
      <p>Vote average : {movie.vote_average}/10</p>
      <p>{movie.overview}</p>
    </div>
  ) : (
    <div className="details">
      <h2>Select a movie name to show details</h2>
    </div>
  );
};

export default MovieDetails;
