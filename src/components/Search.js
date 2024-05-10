import React, { useState } from "react";
import EventCard from "./EventCard";

function Search({ onSearch, events }) { // Receive events as props
  const [searchEvent, setSearchEvent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Call the onSearch function with the search query
    onSearch(searchEvent);
    // Reset the search input
    setSearchEvent("");
  }

  function handleSearchInput(event) {
    setSearchEvent(event.target.value);
  }



  return (
    <div>
      <form className="searchbar" onSubmit={handleSubmit}>
        <label htmlFor="search">Search Events:</label>
        <input
          type="text"
          id="search"
          placeholder="Search Here ..."
          value={searchEvent}
          onChange={handleSearchInput}
        />
        <button type="submit">Search</button>
      </form>
    
    </div>
  );
}

export default Search;

