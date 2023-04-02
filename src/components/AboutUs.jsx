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
                    <p>Welcome to our Washinmachine. We offer professional laundry service, including washing, dry cleaning, ironing, folding of clothes and linens. Our experienced team is dedicated to delivering high-quality results and excellent customer service. Our goal is to provide fast and efficient service while ensuring the highest quality results. Contact us today to schedule your appointment!</p>
                </div>
                <img src={aboutusHeroImg} alt="AbboutUs" />
            </div>
        </div>
    )
}

export default AboutUs
