import React from 'react';
import './Footer.scss';
import {instagram, twitter} from '../../assets/index'


const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-icons">
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
      <div className="footer-content">
        <a href="#">Covid Stats</a>
        <a href="#">Country Stats</a>
        <a href="#">About Us</a>
      </div>
      <h3>© Covid 19 Coorporation</h3>
    </div>
  )
}

export default Footer;