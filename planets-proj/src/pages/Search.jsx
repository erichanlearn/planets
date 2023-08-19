import React, { useState } from 'react';
import videoBg from '../assets/homebg2.mp4'
import axios from 'axios';
import './Search.css'

const Search = () => {
  const [data, setData] = useState([]);
  const [planetName, setPlanetName] = useState('');

  const searchPlanetName = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.api-ninjas.com/v1/planets?name=${encodeURIComponent(planetName)}`;
      
      axios.get(url, {
        headers: {
          'X-Api-Key': 'Xd3KueehnsMaroIP3p0SNw==Y5NKsWTw2Y5QSHPy'
        }
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Request failed:', error);
      });
    }
  };

  return (
    <div className="searchpage">
      <video className="video-bg" src={videoBg} autoPlay loop muted/>
      <video className="video-bg" src={videoBg} autoPlay loop muted/>
      <div className={`display${data.length > 0 ? ' with-background' : ''}`}>
        {data.length > 0 ? (
          data.map((planet, index) => (
            <div key={index}>
              <h2>Planet Name: {planet.name}</h2>
              <p>Mass: {planet.mass} jupiters</p>
              <p>Radius: {planet.radius} jupiters</p>
              <p>Period: {planet.period} days</p>
              <p>Semi-Major Axis: {planet.semi_major_axis} AU</p>
            </div>
          ))
        ) : (
          <p>No planet data available. Type in a valid planet and press Enter!</p>
        )}
      </div>
      <div className="searchcontainer">
        <div className="searchbar">
          <input className="searchelement"
            value={planetName}
            onKeyDown={searchPlanetName}
            onChange={(event) => setPlanetName(event.target.value)}
            placeholder='Enter planet name...'
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
