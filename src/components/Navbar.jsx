import React from 'react'
import cartImg from '../assets/carts.png'
import './css/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <img src="https://www.logodesign.net/images/home-page-logo-03.png" alt="Logo" />
            </div>
            <div className='nbRight'>
                <div className='divListItem'>
                    <ul className='listItem'>
                        <li> <a href="/">Home</a></li>
                        <li> <a href="/">About Us</a></li>
                        <li> <a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div className='cartImg'>
                    <img src={cartImg} alt="cart" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
