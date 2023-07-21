import React, {useState, useEffect} from 'react'
import './index.scss'
import axios from 'axios'
import CovidStatsCard from '../../miniComponents/CovidStatsCard/CovidStatsCard'
import Stack from '@mui/material/Stack'
import countries from '../common/country.json'
import Pagination from '@mui/material/Pagination'
import Footer from '../Footer/footer'

const CovidStats = () => {
  const [covidStats, setCovidStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePage, setPage] = useState(1);

  const handleChange = (e, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'X-RapidAPI-Key': 'fef96a007cmsh8af5b2caa60c1d6p19ed24jsn71ea46306545',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  const getDataCovidStats = () => {
    setLoading(true);
    axios.request(options).then(function (response) {
      setCovidStats(response.data.response);
      setLoading(false);
    });
  }

    const page = 12;
    const visitedPage = (activePage - 1) * page;
    const totalPages = Math.ceil(covidStats.length / page);

    useEffect(() => {
      getDataCovidStats();
    }, []);

  return (
    <div className='full-page-covid'>
      
      {
        covidStats.map((el) => (
          <CovidStatsCard 
          key={el.country}
          continent={el.continent}
          countryName = {el.country}
          population={el.population}
          newCases={el.cases.new}
          deaths={el.deaths.total}
          countryImg = {countries.find((flag) => flag.name === el.country)
            ? countries.find((flag) => flag.name === el.country).code : "xx"
          }
          />
        ))
        .slice(visitedPage, visitedPage + page)}

        <Stack spacing={2} style={{marginBottom: '65px'}}>
          <Pagination page={activePage}
          count = {totalPages}
          onChange={handleChange}
          ></Pagination>
        </Stack>
        <Footer />
    </div>
  );
}

export default CovidStats
