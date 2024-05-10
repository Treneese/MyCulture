import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "./EventList.css";

function Festivals({ events }) {
  const [festivalAndConcertEvents, setFestivalAndConcertEvents] = useState([]);

  useEffect(() => {
    if (events) {
      const filteredEvents = events.filter(
        (event) =>
          event.category === "Category: Concert" ||
          event.category === "Category: Festival"
      );
      setFestivalAndConcertEvents(filteredEvents);
    }
  }, [events]);

  const eventCards = festivalAndConcertEvents.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return (
    <div>
      <h1>Festivals and Concerts</h1>
      <div>
        {eventCards.length ? (
          eventCards
        ) : (
          <p>No festivals or concerts available.</p>
        )}
      </div>
    </div>
  );
}


  
  
  
export default Festivals;