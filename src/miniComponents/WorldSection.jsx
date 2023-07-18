import React from 'react';
import './worldSection.scss';
import {Link} from 'react-router-dom'

const WorldSection = () => {
  return (
    <div className='world-section'>
      <h1>World Stats</h1>
      <div className='world-section-container'>
        <div className='world-section-content '>
          <p>Recovered:</p>
          <p className='first-number'>67482</p>
        </div>
        <div className='world-section-content '>
          <p>Deaths:</p>
          <p className='second-number'>206981911</p>
        </div>
        <div className='world-section-content '>
          <p>ActiveCases:</p>
          <p className='third-number'>479599711</p>
        </div>
        <div className='world-section-content ' >
        <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to='/countrystats'><h3>Country stats</h3></Link>
        </div>
      </div>
    </div>
  )
};

export default WorldSection;