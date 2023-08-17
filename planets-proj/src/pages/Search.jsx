import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

const Search = () => {
  const [data, setData] = useState('');
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
      <div className="searchbar">
        <h1>blah</h1>
        <input
          value={planetName}
          onKeyDown={searchPlanetName}
          onChange={(event) => setPlanetName(event.target.value)}
          placeholder='Enter planet name'
          type="text"
        />
      </div>
    </div>
  );
}

export default Search;