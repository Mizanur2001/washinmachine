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
                    <a href="https://www.facebook.com/profile.php?id=100015583307535" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/jameslev2001/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/Mizanur35358853" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://github.com/Mizanur2001" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className='footerCategory'>
                <h3>Categoryes</h3>
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
                    <a href="mailto:developer20032001@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                    <p>support@Washinmachine.com</p>
                </div>
            </div>
            <div className='aboutUs'>
                <p className='abutUsHeading'>About Us</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis corporis quia consectetur officiis rerum velit impedit ad quis saepe sint, voluptate maiores illum autem cumque veniam. Explicabo eius sequi hic? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat iste sit! Nesciunt odit placeat cupiditate, harum rerum laborum perspiciatis quo eius vel qui ex sit earum non repellat voluptate.</p>
                <div className="flex copyRightCont">
                    <p className="copyRightText">WashINMachine  ©  2023</p>
                    <p className="copyRightText"><a href="/"> Privacy </a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
