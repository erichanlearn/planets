import React from 'react'
import videoBg from '../assets/homebg.mp4'
import './Home.css'
const Home = () => {
  return (
    <div className="homescreen">
      <video src={videoBg} autoPlay loop muted/>
      <h1 className="welcome">welcome. click below to explore</h1>
      <div className="explore">
      <a href='/Search'>
      <button className="style-button">
        teleport
      </button>
      </a>
      </div>
    </div>
  );
}

export default Home;