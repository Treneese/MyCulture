import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

function SportsEvents({ events, setEvents }) {
  const [sportsEvents, setSportsEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/events')
      .then(response => response.json())
      .then(data => {
        // Set the fetched event data directly
        setEvents(data || []); // Set events directly without accessing the 'events' property
      })
      .catch(error => {
        console.error('Error fetching event data:', error);
      });
  }, [setEvents]);

  useEffect(() => {
    if (events) {
      const sportsEventsData = events.filter(event => event.category === "Sports");
      setSportsEvents(sportsEventsData);
    }
  }, [events]);

  const eventCards = sportsEvents.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return (
    <div>
      <h1>Sports Events</h1>
      <div>
      
        {eventCards}
      </div>
    </div>
  );
}

export default SportsEvents;


