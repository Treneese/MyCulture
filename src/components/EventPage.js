import React, { useState } from "react";
import EventList from "./EventList";
import { Route, Routes} from 'react-router-dom';
import Search from "./Search";
import Header from "./Header";
import EventFormPage from './EventFormPage';
import Sports from './Sports';
import Festivals from './Festivals';
import Business from './Busniess'

function EventPage() {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([]);

  function handleSearch(searchEvent) {
    setSearch(searchEvent);
  }

  return (
    <main>
     
<Search onSearch={handleSearch} events={events} /> 
<Sports events={events} setEvents={setEvents}/>
<Business events={events} setEvents={setEvents} />
<EventList events={events} setEvents={setEvents}/>
<Festivals events={events} setEvents={setEvents} />
    </main>
  );
}

export default EventPage;
