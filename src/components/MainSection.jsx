import React from 'react'
import './css/MainSection.css'
import mainContImg from '../assets/mainContainerImg.png'

const MainSection = () => {
    return (
        <div className='ManiSection'>
            <div className='MainsectionLeft'>
                <div className='TextContainer'>
                    <h1>Don't Worry!</h1>
                    <span>We are here for you</span>
                </div>
                <button className='priceListBtn'><a href='/'>View Price List</a></button>
                <div className='authBtnMainsectionLeft'>
                    <button className='signinBtn'>Order Now</button>
                </div>
            </div>
            <div className='ImageContainer'>
                <img src={mainContImg} alt="MianContainerImage" />
            </div>
            <div className='authBtn'>
                <button className='signupBtn'>Order Now</button>
            </div>
        </div>
    )
}

export default MainSection
