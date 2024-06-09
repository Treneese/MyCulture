import React, { useState, useEffect } from "react";
import Search from "./Search";

import './EventPage.css';
import EventCard from "./EventCard";

function EventPage( ) {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([]);
  const [ setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch events. Please try again later.");
        }
        return resp.json();
      })
      .then((data) =>  setEvents(data))
   
      .catch((error) =>  setError(error.message))
    
   
  },[setEvents, setError]);

  function handleSearch(searchEvent) {
    setSearch(searchEvent);
  }
  function editEvent(eventId) {
    const filteredEvents = events.filter((event) => event.id !== eventId)
    setEvents(filteredEvents)


  }
  const filteredEvents = events.filter((event) => {
    const lowercaseSearch = typeof search === 'string' ? search.toLowerCase() : '';
    const lowercaseName = event.name?.toLowerCase();
    return lowercaseName.includes(lowercaseSearch);
});

  
  const eventCards = filteredEvents.map((event) => (
    <EventCard key={event.id} event = {event} editEvent={editEvent}/>
   
  ))
  return (
    <main className='eventpage'>
     
<Search onSearch={handleSearch} events={events}  eventCards={ eventCards}/> 
{/* <Sports events={events} setEvents={setEvents} eventCards={ eventCards}/>
<Business events={events} setEvents={setEvents} eventCards={ eventCards}/>
<EventList events={events} setEvents={setEvents} eventCards={ eventCards}/>
<Festivals events={events} setEvents={setEvents}  eventCards={ eventCards}/> */}
    </main>
  );
}

export default EventPage;
