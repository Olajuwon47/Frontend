import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Geomap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          // Use OpenCage API to get address from coordinates
          const apiKey = '5ee0bad041134dd89fc29b2ba3ed4c86';
          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

          try {
            const response = await axios.get(apiUrl);
            const { results } = response.data;
            if (results && results.length > 0) {
              setAddress(results[0].formatted);
            }
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        },
        () => {
          console.error('Unable to retrieve your location');
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, []);

  return (
    <div className="geomap">
      <h1> LOCATION TRACKER</h1>
      {userLocation && (
       
       <table className='Geo-tab'>
          <tr className='Geo-header'>
            <th>CURRENT LATITUDE</th>
            <th>CURRENT LONGITUDE</th>
          </tr>
          <tr>
            <td>{userLocation.lat}</td>
            <td>{userLocation.lng}</td>
          </tr>
          {address && <>Your current address: {address}</>}
       </table>

      )}
    </div>
  );
}

export default Geomap;
