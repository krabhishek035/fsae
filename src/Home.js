import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import Footer from './footer'

export default function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <div className='logo-box'>
        <div className='logo'>
          <img src='logo.png' />
        </div>
        <div className='line'>
        </div>
        <div className='fsae'>
          <h1>Phoenix
            Racing
          </h1>
        </div>
      </div>
      <div className='aboutUs'>About Us</div>
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>
      <div className='line4'></div>
      <img className='logoBlue' src='logo.png' />
      <p className='info'>Team Phoenix Racing is a team of enthusiastic and passionate aspiring automobile engineers.Team has made its mark in various national level competitions including Student Formula car, All terrain vehicle, Electric go-kart. During their stint the team is in constant endeavor to design, manufacture and test vehicles with excellent performance and efficiency in a cost-effective manner.</p>
      <div className='video'></div>
      <div className='crew'></div>
      <p className='crewHeading'>CREW</p>
      <p className='ourVision'>Our Vision</p>
      <div className='line5'></div>
      <div className='line6'></div>
      <div className='line7'></div>
      <div className='line8'></div>
      <div className='world'>
        <h1>Represent India at FS Global</h1>
      </div>
      <div className='sus'>
        <h1>Sustainable development </h1>
      </div>
      <div className='car'>
        <h1>Foster E- Mobility</h1>
      </div>
      <Footer/>

    </div>
  )
}

