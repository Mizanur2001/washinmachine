import React from 'react'
import cartImg from '../assets/carts.png'
import './css/Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {

    let isActive = false;

    const funcToggle = () => {
        const element = document.querySelector(".listItem");
        let bars = document.querySelectorAll('.hamburger span')
        element.classList.toggle('open')
        if (!isActive) {
            bars[0].style.transform = 'rotate(45deg)'
            bars[1].style.opacity = '0'
            bars[2].style.transform = 'rotate(-45deg)'
            isActive = true;
        }
        else {
            bars[0].style.transform = 'rotate(0deg)'
            bars[1].style.opacity = '1'
            bars[2].style.transform = 'rotate(0deg)'
            isActive = false;
        }

    }

    return (
        <>
            <nav className='mobile'>
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
                <div className='hamburger' onClick={funcToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
