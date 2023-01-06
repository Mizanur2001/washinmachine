import React from 'react'
import cartImg from '../assets/carts.png'
import './css/Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <img src={logo} alt="Logo" />
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
