import React from 'react'
import './App.css'
import Home from './components/Home'
import CovidStats from './components/CovidStats'
import CountryStats from './components/CountryStats'
import AboutUs from './components/AboutUs'
import Navbar from './components/Home/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/covidstats' element={<CovidStats />}/>
      <Route path='/countrystats' element={<CountryStats />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
    </Routes>
  
    
    </>
  )
}

export default App
