import React, { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import EventPage from './components/EventPage';
import './App.css';
import EventFormPage from './components/EventFormPage';
import Sports from './components/Sports';
import Festivals from './components/Festivals';
import Business from './components/Busniess'
import Header from './components/Header';
import Search from './components/Search';
import EventList from './components/EventList';
import About from './About';

function App() {
  // const [sidebarVisible, setSidebarVisible] = useState(false);
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("");
  // const toggleSidebar = () => {
  //   setSidebarVisible(!sidebarVisible);
  // };

 

  function handleSearch(searchEvent) {
    setSearch(searchEvent);
  }

  return (
    <div className="App">
      
      <Header />
     
      <Search onSearch={handleSearch} events={events} />
<Routes>
<Route path="/Events" element={<EventList search={search}/>}/>
<Route path="/Events/Sports" element={<Sports /> }/>
<Route path="/Events/Festivals" element={<Festivals />}/>
<Route path="/Events/Business" element={<Business />}/>
<Route path="/Events/Form" element={<EventFormPage />}/>
<Route path="/About" element={<About/>}/>
</Routes>

   
   <div className='dont-show'>
   <EventPage events={events} setEvents={setEvents}/>
   </div>
   </div>
  );
}
export default App;