import React from "react";

const MovieDetails = (props) => {
  const movie = props.movie;

  return movie ? (
    <div className="details">
      <section className="top">
        <div className="top-left">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt="poster"
            />
          ) : (
            <img src="images/no-image-available.png" alt="not available" />
          )}
        </div>
        <div className="top-right">
          <h2>{movie.title}</h2>
          <p id="stars">
            {"★ ".repeat(Math.round(movie.vote_average)) +
              "☆ ".repeat(10 - Math.round(movie.vote_average))}
          </p>
          {movie.genres && (
            <p> {movie.genres.map((genre) => genre.name + " ")}</p>
          )}
        </div>
      </section>
      <section className="bottom">
        <hr />
        {movie.overview && (
          <>
            {" "}
            <h4>Synopsis</h4>
            <p>{movie.overview}</p>{" "}
          </>
        )}
      </section>
    </div>
  ) : (
    <div className="details">
      <div>
        <h2>Select a movie to show details</h2>
        <img src="images/action.png" alt="The movie database logo" />
      </div>
    </div>
  );
};

export default MovieDetails;
