import React from 'react'
import cartImg from '../assets/carts.png'
import './css/Navbar.css'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'

const Navbar = () => {
    return (
        <>
            <nav className='active'>
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
                <div className='phoneNavMenu'>
                    <img className='menuIcon' src={menu} alt="" />
                    <img className='closeIcon' src={close} alt="" />
                </div>
            </nav>
        </>
    )
}

export default Navbar
