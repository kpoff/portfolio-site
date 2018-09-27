import React from 'react';
import '../App.css';
import Experience from './Experience';
import Education from './Education';

const resume = () => {
  return (
    <div>
      <div style={{width: '40%', float:"left"}}>
        <Education/>
      </div>
      <div style={{width: '60%', float:"right"}}>
        <Experience />
      </div>
    </div>
  )
}

export default resume;