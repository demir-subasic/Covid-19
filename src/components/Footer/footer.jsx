import React from 'react';
import './Footer.scss';
import {facebook, instagram, twitter} from '../../assets/index'
import { Link } from 'react-router-dom';


const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook} alt='facebook'/>
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
      <div className="footer-content">
       <Link style={{textDecoration: 'none'}} to='/covidstats'><a>COVID STATS</a></Link>
       <Link style={{textDecoration: 'none'}} to='/countrystats'><a>COUNTRY STATS</a></Link>
       <Link style={{textDecoration: 'none'}} to='/aboutus'><a>ABOUT US</a></Link>
      </div>
      <h3>© Covid 19 Coorporation</h3>
    </div>
  )
}

export default Footer;