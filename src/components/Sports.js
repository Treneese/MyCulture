import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import './Card.css';
import "./EventList.css";


function Sports({ events, setEvents }) {
  const [sportsEvents, setSportsEvents] = useState([]);

  useEffect(() => {
    if (events) {
      const filteredEvents = events.filter(
        (event) =>
          event.category === "Category: Sports"
      );
      setSportsEvents(filteredEvents);
    }
  }, [events]);

  const eventCards = sportsEvents.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return (
    <div>
      <h1>Sports Events</h1>
      <div>
        {eventCards.length ? (
          eventCards
        ) : (
          <p>No sport events available.</p>
        )}
      </div>
    </div>
  );
}
export default Sports;


