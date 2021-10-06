import React from "react";

const Searchbar = (props) => {
  const { handleInput, search, handleClear } = props;

  return (
    <div className="search-bar">
      <img id="glass" src="images/icon-search.png" alt="magnifying glass" />
      <input
        type="text"
        placeholder="search"
        onChange={handleInput}
        value={search}
      ></input>
      <img
        id="clear"
        onClick={handleClear}
        src="images/icon-clear.png"
        alt="clear"
      />
    </div>
  );
};

export default Searchbar;
