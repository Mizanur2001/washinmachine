import React from 'react'
import cartImg from '../assets/carts.png'
import './css/Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

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
                    <Link to="/"> <img src={logo} alt="Logo" /></Link>
                </div>
                <div className='nbRight'>
                    <div className='divListItem'>
                        <ul className='listItem'>
                            <li> <Link to="/" onClick={funcToggle}>Home</Link></li>
                            <li> <Link to="/aboutus" onClick={funcToggle}>About Us</Link></li>
                            <li> <Link to="/contactus" onClick={funcToggle}>Contact Us</Link></li>
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
