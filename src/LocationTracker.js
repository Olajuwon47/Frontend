import React, { useState, useEffect } from 'react';

const LocationTracker = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Use Geolocation API to get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  return (
    <div>
      <h1>Location Tracker</h1>
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationTracker;