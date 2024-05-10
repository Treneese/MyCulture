import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import './EventList.css'

// function EventList({search, events, setEvents }) {
//   const [ setError] = useState(null);




//   useEffect(() => {
//     fetch("http://localhost:3001/events")
//       .then((resp) => {
//         if (!resp.ok) {
//           throw new Error("Failed to fetch events. Please try again later.");
//         }
//         return resp.json();
//       })
//       .then((data) =>  setEvents(data))
   
//       .catch((error) =>  setError(error.message))
    
   
//   },[]);


//   function editEvent(eventId) {
//     const filteredEvents = events.filter((event) => event.id !== eventId)
//     setEvents(filteredEvents)


//   }
//   const filteredEvents = events.filter((event) => {
//     const lowercaseSearch = typeof search === 'string' ? search.toLowerCase() : '';
//     const lowercaseName = event.name?.toLowerCase();
//     return lowercaseName.includes(lowercaseSearch);
// });
  
//   const eventCards = filteredEvents.map((event) => (
//     <EventCard key={event.id} event = {event} editEvent={editEvent}/>
   
//   ))

//   return (
//     <div>
// {eventCards.length === 0 && <p>No events found.</p>}
//       <ul className="cards">
//      { eventCards}
//      </ul>
//      </div>
//     );
// }
function EventList({ search}) {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  
  // const [update, setUpdate] = useState(false)
  
    useEffect(() => {
      fetch("http://localhost:3001/events")
  // .then((resp) => resp.json())
  // .then((data) => setPlants(data))
  //   }, []) 
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
      const filteredEvents = events.filter((event) => event.id !== eventId)
      setEvents(filteredEvents)
    }
  
   
    
    const filteredEvents = events?.filter((event) => {
      const lowercaseSearch = search.toLowerCase()
  const lowercaseName = event.name.toLowerCase()
  return lowercaseName.includes(lowercaseSearch)
    })
  
    const eventCards = filteredEvents?.map((event) => (
       <EventCard key={event.id} event = {event} removeEvent={removeEvent}/> 
  ))
  
  
    return (
      <div>
      {error && <p>Error: {error}</p>}
      <ul className="cards">
       { eventCards}
       </ul>
       </div>
      );
  }

 

export default EventList;
