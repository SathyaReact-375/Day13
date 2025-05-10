import React from 'react';
import useGeolocation from './useGeolocation';

const LocationTracker = () => {
  const { latitude, longitude, error, isLoading } = useGeolocation({
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  });

  if (isLoading) return <div>Loading your location...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{textAlign:"center"}}>
        <h1>Task14</h1>
      <h1>Your Location</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      {latitude && longitude && (
        <a
          href={`https://www.openstreetmap.org/#map=16/${latitude}/${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Map
        </a>
      )}
    </div>
  );
};

export default LocationTracker;