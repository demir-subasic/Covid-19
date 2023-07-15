import React from 'react'
import logo from '../../assets/covid-logo.png'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'><img src={logo}/></Link>
      </div>
      <ul>
        <Link style={{textDecoration: 'none'}} to='/covidstats'><li>COVID STATS</li></Link>
        <Link style={{textDecoration: 'none'}} to='/countrystats'><li>COUNTRY STATS</li></Link>
        <Link style={{textDecoration: 'none'}} to='/aboutus'><li>ABOUT US</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
