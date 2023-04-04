import React from 'react'
import mainContImg from '../assets/mainContainerImg.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/MainSection.css'
import { Link } from 'react-router-dom';

const MainSection = () => {
    const funcOrder = () => {
        toast('This Website is Under Maintenance. You can Order Via WatsApp or Phone Call Our Contact Number is 7811925012', {
            autoClose: 10000,
        });
    }
    return (
        <div className='ManiSection'>
            <ToastContainer />
            <div className='MainsectionLeft'>
                <div className='TextContainer'>
                    <h1>Don't Worry!</h1>
                    <span>We are here for you</span>
                </div>
                <button className='priceListBtn'><Link to='/price'>View Price List</Link></button>
                <div className='authBtnMainsectionLeft'>
                    <button className='signinBtn' onClick={funcOrder}>Order Now</button>
                </div>
            </div>
            <div className='ImageContainer'>
                <img src={mainContImg} alt="MianContainerImage" />
            </div>
            <div className='authBtn'>
                <button className='signupBtn' onClick={funcOrder}>Order Now</button>
            </div>
        </div>
    )
}

export default MainSection
