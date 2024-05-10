import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

function Festivals({ events, setEvents }){
const [festivalAndConcertEvents, setFestivalAndConcertEvents] = useState([]);
  
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
        const festivalAndConcertEventsData = events.filter(event => 
          event.category === "Category: Concert" || event.category === "Category: Festival");
        setFestivalAndConcertEvents(festivalAndConcertEventsData);
      }
    }, [events]);
  
    const eventCards = festivalAndConcertEvents.map((event) => (
      <EventCard key={event.id} event={event} />
    ));
  
    return (
      <div>
        <h1>Festivals and Concerts</h1>
        <div>
          {eventCards}
        </div>
      </div>
    );
  }
  
  
export default Festivals;