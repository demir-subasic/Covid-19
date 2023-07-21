import React from 'react'
import { facebook, instagram, twitter } from '../../assets'
import './index.scss'
import Footer from '../Footer/footer'

const AboutUs = () => {
  return (
    <>
    <div className='full-page-about'>
      <p className='title'>Our application is made on the basis of accurate data regarding information about covid-19.
      You can see about our team below</p>

      <div className="container">
        <div className='about-us-card'>
          <div className='image'>
          <img className='profile-picture' src="https://avatars.githubusercontent.com/u/117202634?v=4" alt="" />
          </div>
          <h2 className='full-name'>Demir Subasic</h2>
          <span>Web Developer</span>
          <p className='description'>
          Demir had the responsibility of overseeing the core functionalities of the application, along with organizing the project's components.
          </p>
          <div className='social-media'>
          <a href="https://www.facebook.com/"><img src={facebook} alt="faceebok" /></a>
          <a href="https://www.instagram.com/"><img src={instagram} alt="instagram" /></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F"><img src={twitter} alt="instagram" /></a>
          </div>
        </div>
        <div className='about-us-card'>
          <img src="" alt="" />
          <h2 className='full-name'>Ensar Vragic</h2>
          <span>Web Developer</span>
          <p className='description'>
          Ensar was an active participant across all aspects of the project, from initial planning to implementing its functionalities.
          </p>
          <div className='social-media'>
          <a href=""><img src={facebook} alt="faceebok" /></a>
          <a href=""><img src={instagram} alt="instagram" /></a>
          <a href=""><img src={twitter} alt="instagram" /></a>
          </div>
        </div>
        <div className='about-us-card'>
          <img src="" alt="" />
          <h2 className='full-name'>Muhamed Gusinac</h2>
          <span>Web Developer</span>
          <p className='description'>
          His valuable contributions and problem-solving abilities were instrumental in ensuring the project's success and seamless operation.
          </p>
          <div className='social-media'>
          <a href=""><img src={facebook} alt="faceebok" /></a>
          <a href=""><img src={instagram} alt="instagram" /></a>
          <a href=""><img src={twitter} alt="instagram" /></a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default AboutUs
