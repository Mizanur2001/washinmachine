import React from 'react'
import './css/AboutUs.css'
import aboutusHeroImg from '../assets/aboutusHeroSec.png'

const AboutUs = () => {
    return (
        <div className='aboutUsContainer'>
            <div className='backGroundRapper'>
                <div className='leftBg'></div>
                <div className='rightBg'></div>
            </div>
            <div className='heroSection'>
                <div className='textSection'>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consectetur adipisicing elit. Asperiores</p>
                </div>
                <img src={aboutusHeroImg} alt="AbboutUs" />
            </div>
        </div>
    )
}

export default AboutUs
