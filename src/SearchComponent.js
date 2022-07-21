import React, { useState } from "react";

export default function SearchComponent(props) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }

  function handleFormSubmit(event) {
    props.onCityChange(searchInput);
    event.preventDefault();
  }

  return (
    <div className="SearchComponent">
      <form>
        <input
          type="search"
          placeholder="Enter a city"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button input type="submit" onClick={handleFormSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}
