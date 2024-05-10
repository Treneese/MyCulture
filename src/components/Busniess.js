import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import './Card.css';
import "./EventList.css";

function Business({ events}) {
  const [businessEvents, setBusinessEvents] = useState([]);

    useEffect(() => {
      if (events) {
        const filteredEvents = events.filter(
          (event) =>
            event.category === "Category: Business"
        );
        setBusinessEvents(filteredEvents);
      }
    }, [events]);
  
    const eventCards = businessEvents.map((event) => (
      <EventCard key={event.id} event={event} />
    ));
  
    return (
      <div>
        <h1>Business Events</h1>
        <div>
          {eventCards.length ? (
            eventCards
          ) : (
            <p>No business events available.</p>
          )}
        </div>
      </div>
    );
  }
export default Business;
