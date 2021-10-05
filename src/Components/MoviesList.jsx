import React from "react";

const MoviesList = (props) => {
  const movies = [...props.list.results];
  const select = props.handleSelect;
  const searchReg = new RegExp(props.search, "i");
  return (
    <div className="list">
      <h2>here my beautiful list :</h2>
      <ul>
        {movies.filter(movie=>movie.title.match(searchReg)).map((movie) => (
          <li key={movie.id} num={movies.indexOf(movie)} onClick={select}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
