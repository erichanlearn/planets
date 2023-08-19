import React from 'react'
import '../index.css'
import './About.css'
import videoBg from '../assets/homebg.mp4'
const About = () => {
  return (
    <div className = "aboutpage">
      <video src={videoBg} autoPlay loop muted/>
      <div className="aboutcontainer">
        <h1 className="abouttext">
          This is planets, a basic website that returns important data on planets and exoplanets throughout the universe. Developed by Eric Han. More to come!
        </h1>
      </div>
    </div>
  );
}

export default About;