import React, {useState, useEffect} from 'react';
import './worldSection.scss';
import {Link} from 'react-router-dom'
import axios from 'axios'


const WorldSection = () => {
  const [covidWorldStats, setCovidWorldStats] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'X-RapidAPI-Key': 'fef96a007cmsh8af5b2caa60c1d6p19ed24jsn71ea46306545',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  const getDataCovidStats = () => {
    axios.request(options).then(function (response) {
      setCovidWorldStats(response.data.response);
    });
  };

  useEffect(() => {
    getDataCovidStats();
  }, []);

  return (
    <div className='world-section'>
      <h1>World Stats</h1>
      <div className='world-section-container'>
        <div className='world-section-content '>
          <p>Recovered:</p>
          <p className='first-number'>
          {covidWorldStats.reduce(
          (prev, curr) => (prev += curr?.cases?.recovered || 0),
          0)}
          </p>
        </div>
        <div className='world-section-content '>
          <p>Deaths:</p>
          <p className='second-number'>
          {covidWorldStats.reduce(
          (prev, curr) => (prev += curr?.deaths?.total || 0),
          0)}
          </p>
        </div>
        <div className='world-section-content '>
          <p>ActiveCases:</p>
          <p className='third-number'>
          {covidWorldStats.reduce(
          (prev, curr) => (prev += curr?.cases?.active || 0),
          0)}
          </p>
        </div>
        <div className='world-section-content ' >
        <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to='/countrystats'><h3 className='country-stats'>Country stats</h3></Link>
        </div>
      </div>
    </div>
  )
};

export default WorldSection;