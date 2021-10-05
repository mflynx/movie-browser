import "./App.css";
import React, { Component } from "react";

import SearchBar from "./Components/SearchBar.jsx";
import MoviesList from "./Components/MoviesList.jsx";
import MovieDetails from "./Components/MovieDetails.jsx";

import movies from "./movies.json";

export class App extends Component {
  state = {
    movie: "",
    search: "",
  };
  handleSelect = (evt) => {
    const num = Number(evt.target.attributes.num.value);
    this.setState({ movie: movies.results[num]});
    console.log("selected: ", typeof evt.target.attributes.num.value); //string
    console.log("selected: ", num); // number
    console.log("movie: ", this.state.movie);
  };
  handleInput = (evt) => {
    this.setState({ search: evt.target.value }, ()=> {
      console.log("search input: ", this.state.search)
    });
  };
  render() {
    const {movie, search} = this.state;
    return (
      <div className="App">
        <h1>Movie browser</h1>
        <div className="main">
          <div>
          <SearchBar handleInput={this.handleInput} search={search} />
          <MoviesList list={movies} handleSelect={this.handleSelect} search={search} />
          </div>
          <MovieDetails movie={movie} />
        </div>
      </div>
    );
  }
}

export default App;
