import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./EventList.css";

function Festivals({ search }) {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/events?category=Festival`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch events");
        }
        return resp.json();
      })
      .then((data) => setEvents(data))
      .catch((error) => setError(error.message));
  }, []);

 

  function removeEvent(eventId) {
    const filteredEvents = events.filter((event) => event.id !== eventId);
    setEvents(filteredEvents);
  }

  const filteredEvents = events.filter((event) => {
    const lowercaseSearch = search ? search.toLowerCase() : '';
    const lowercaseName = event.name ? event.name.toLowerCase() : '';
    return lowercaseName.includes(lowercaseSearch);
  });

  const eventCards = filteredEvents.map((event) => (
    <EventCard key={event.id} event={event} removeEvent={removeEvent} />
  ));
  
  return (
    <div className="festival-container">
      <h1>Festivals </h1>
      {error && <p>Error: {error}</p>}
      {eventCards.length === 0 ? (
        <p>No Festivals Available.</p>
      ) : (
        <ul className="cards">
          {eventCards}
        </ul>
      )}
    </div>
  );
}

export default Festivals;
