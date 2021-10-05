import React from "react";

const Searchbar = (props) => {
  const handleInput = props.handleInput;
  const search = props.search;
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="type here"
        onChange={handleInput}
        value={search}
      ></input>
    </div>
  );
};

export default Searchbar;
