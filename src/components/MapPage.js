import React from 'react';
// import Map from './Map';

const MapPage = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      name: 'Event 1',
      latitude: 37.7749,
      longitude: -122.4194
    },
    // Add more event objects here with latitude and longitude
  ];

  return (
    <div>
      <h1>Event Map</h1>
      {/* <Map events={events} /> */}
    </div>
  );
};

export default MapPage;