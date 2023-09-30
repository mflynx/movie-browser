import "./App.css";

import React, { Component } from "react";

import Header from "./Components/Header.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import MoviesList from "./Components/MoviesList.jsx";
import MovieDetails from "./Components/MovieDetails.jsx";

import axios from "axios";

export class App extends Component {
  state = {
    movies: null,
    movie: "",
    search: "",
  };
  getAllCurrentMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&total_pages7`
      )
      .then((res) => this.setState({ movies: res.data }))
      .catch((err) => console.log(err));
  };
  componentDidMount = () => {
    this.getAllCurrentMovies();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.search !== prevState.search && this.state.search !== "")
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.search}`
        )
        .then((res) => this.setState({ movies: res.data }))
        .catch((err) => console.log(err));

    if (this.state.search !== prevState.search && this.state.search === "")
      this.getAllCurrentMovies();
  };
  handleSelect = (evt) => {
    const id = Number(evt.target.attributes.id.value);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => this.setState({ movie: res.data }))
      .catch((err) => console.log(err));
  };
  handleInput = (evt) => {
    this.setState({ search: evt.target.value });
  };
  handleClear = (evt) => {
    this.setState({ search: "" });
  };

  render() {
    const { movies, movie, search } = this.state;
    if (!movies) return <h1>Loading...</h1>;
    return (
      <div className="App">
        <Header />
        <div className="main">
          <SearchBar
            handleInput={this.handleInput}
            search={search}
            handleClear={this.handleClear}
          />
          <MoviesList
            list={movies}
            handleSelect={this.handleSelect}
            search={search}
          />
          <MovieDetails movie={movie} />
        </div>
      </div>
    );
  }
}

export default App;
