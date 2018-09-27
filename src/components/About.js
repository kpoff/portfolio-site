import React from 'react';
import '../App.css';
import Bio from './Bio';

const about = () => {
  return (
    <div>
    <h1>About</h1>
    <div id="photo">
    <img src="../images/headshot.jpg"/>
    <Bio/>
    </div>
    </div>
   
  )
}

export default about;