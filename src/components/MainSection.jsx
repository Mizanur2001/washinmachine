import React from 'react'
import './css/MainSection.css'
import mainContImg from '../assets/mainContainerImg.png'

const MainSection = () => {
    return (
        <div className='ManiSection'>
            <div className='MainsectionLeft'>
                <div className='TextContainer'>
                    <h1>Dotn't Worry!</h1>
                    <span>We are here for you</span>
                </div>
                <button className='priceListBtn'>View Price List</button>
            </div>
            <div className='ImageContainer'>
                <img src={mainContImg} alt="MianContainerImage" />
            </div>
            <div className='authBtn'>
                <button className='signinBtn'>Sign In</button>
                <button className='signupBtn'>Sign Up</button>
            </div>
        </div>
    )
}

export default MainSection
