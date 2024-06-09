import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ events }) => {
  // Your Google Maps API key
  const apiKey = 'YOUR_API_KEY';

  // Render marker for each event
  const renderMarkers = () => {
    return events.map(event => (
      <Marker
        key={event.id}
        lat={event.latitude} // Add latitude data to your events JSON
        lng={event.longitude} // Add longitude data to your events JSON
        text={event.name}
      />
    ));
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center location
        defaultZoom={8} // Default zoom level
      >
        {renderMarkers()}
      </GoogleMapReact>
    </div>
  );
};

// Marker component to render markers on the map
const Marker = ({ text }) => <div>{text}</div>;

export default Map;

