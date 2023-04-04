import React from 'react'
import './css/Price.css'
import priceImg from '../assets/price.png'

const Price = () => {
    return (
        <div className='PreceCont'>
            <img src={priceImg} alt="Price" />
        </div>
    )
}

export default Price
