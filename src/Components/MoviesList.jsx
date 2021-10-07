import React from "react";

const MoviesList = (props) => {
  const movies = [...props.list.results];
  const select = props.handleSelect;
  const search = props.search;

  return (
    <div className="list">
      {search ? (
        <h3>
          Results for "<span>{search}</span>"
        </h3>
      ) : (
        <h3>Movies now playing:</h3>
      )}
      <ul>
        {movies
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((movie) => (
            <li key={movie.id} id={movie.id} onClick={select}>
              {movie.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
