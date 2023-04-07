import React from 'react'
import './css/Footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logoInfo'>
                <img src={logo} alt="logo" />
                <span>Washinmachine.com</span>
                <div className="footer-icons">
                    <a href="https://www.facebook.com/profile.php?id=100091436719500" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/washinmachine23/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/Mizanur35358853" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            <div className='footerCategory'>
                <h3>Categories</h3>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>House hold</li>
                </ul>
            </div>
            <div className="addPhoneLoc">
                <h3 className='addPhoneLocConactUS'>Contact US</h3>
                <div className="flex items-center">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Chakma Road,Kadampukur, New Town , Kolkata</p>
                </div>
                <div className="flex items-center">
                    <a href="tel:+91-7811925012"><i className="fa-solid fa-phone"></i></a>
                    <p>7811925012</p>
                </div>
                <div className="flex items-center">
                    <a href="mailto:support@washinmachine.com"><i className="fa-solid fa-envelope"></i></a>
                    <p>support@washinmachine.com</p>
                </div>
            </div>
            <div className='aboutUs'>
                <p className='abutUsHeading'>About Us</p>
                <p>Welcome to our Washinmachine.  We offer professional laundry service, including washing, dry cleaning, ironing, folding of clothes and linens. Our experienced team is dedicated to delivering high-quality results and excellent customer service. Our goal is to provide fast and efficient service while ensuring the highest quality results. Contact us today to schedule your appointment!</p>
                <div className="flex copyRightCont">
                    <p className="copyRightText">WashINMachine  ©  2023</p>
                    <p className="copyRightText"><a href="/"> Privacy </a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
