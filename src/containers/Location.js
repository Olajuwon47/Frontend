import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Location = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [geoInfo, setGeoInfo] = useState({});

    useEffect(() => {
        //Invokes Function to Get IP Address
        getVisitorsIP();
    }, []);

    // Gets the IP Address
    const  getVisitorsIP = async () => {
        try {
            const response = await fetch('https://api.ipify.org');
            const data = await response.text();
            // Store IP in store
            setIpAddress(data);
        } catch (error) {
            console.error('Failed to fetch IP:', error);
        }
    };

    //Update IP Address by user Input
    const handleInputChange = (e) => {
        setIpAddress(e.target.value);
    };

    //using IP from state to get location info
    const fetchIPInfo = async () => {
        try {
            const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
            const data = await response.json();
            // Store Location info in state
            setGeoInfo(data);
        } catch (error) {
            console.error('Failed to fetch IP:', error);
        }
    };

  return (
    <div className='location'>  

        <div className="firstSec-text">
            <h1><span>Track user location</span> <br /> anytime & anywhere</h1>
            <p>Zildo-find let's you get a users geolocation and <br /> works on all phone types, networks and countries.</p>
        </div>

        <div className="location-cont">
                <div className="location-main">
                    <h3>User IP to location</h3>
                    <div className="form-area">
                        <input type="text" value={ipAddress} onChange={handleInputChange} className='formInput' />
                        <button onClick={fetchIPInfo}>Get Info</button>
                    </div>
                </div>    

            {geoInfo.country && (

                
                <div className="result">
                    <table>
                        <tr className='headerr'>
                            <th>COUNTRY</th>
                            <th>REGION</th>
                            <th>CITY</th>
                            <th>ZIP</th>
                            <th>TIMEZONE</th>
                        </tr>

                        <tr>
                            <td>{geoInfo.country} ({geoInfo.countryCode})</td>
                            <td>{geoInfo.regionName} ({geoInfo.region})</td>
                            <td>{geoInfo.city}</td>
                            <td>{geoInfo.zip}</td>
                            <td>{geoInfo.timezone}</td>
                        </tr>
                    </table>
                </div>

                

                /*<div className="result">
                    <strong>Country:</strong> {geoInfo.country} ({geoInfo.countryCode})
                    <br />
                    <strong>Region:</strong> {geoInfo.regionName} ({geoInfo.region})
                    <br />
                    <strong>City:</strong> {geoInfo.city}
                    <br />
                    <strong>Zip:</strong> {geoInfo.zip}
                    <br />
                    <strong>Timezone:</strong> {geoInfo.timezone}
                    <br />
                </div>*/
            )}
        </div>

    </div>
  )
}

export default Location
