import React from 'react';
import './worldSection.scss';

const WorldSection = () => {
  return (
    <div className='world-section'>
      <h1>World Stats</h1>
      <div className='world-section-container'>
        <div className='world-section-content card'>
          <p>Recovered:</p>
          <p className='first-number'>6748</p>
        </div>
        <div className='world-section-content card'>
          <p>Deaths:</p>
          <p className='second-number'>20698191</p>
        </div>
        <div className='world-section-content card'>
          <p>ActiveCases:</p>
          <p className='third-number'>47959971</p>
        </div>
        <div className='world-section-content card' >
          <h3 className='last-stats'>Country Stats</h3>
        </div>
      </div>
    </div>
  )
};

export default WorldSection;