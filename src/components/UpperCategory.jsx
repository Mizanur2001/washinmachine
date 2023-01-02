import React from 'react'
import man from '../assets/man.png'
import woman from '../assets/woman.png'
import kids from '../assets/kids.png'
import hosehold from '../assets/household.png'
import './css/UpperCategory.css'

export default function UpperCategory() {
    return (
        <div className='uppercategory'>
            <img className='categoryImg' src={man} alt="manCat" />
            <img className='categoryImg' src={woman} alt="womanCat" />
            <img className='categoryImg' src={kids} alt="kidsCat" />
            <img className='categoryImg objectFit' src={hosehold} alt="houseHoldCart" />
        </div>
    )
}
