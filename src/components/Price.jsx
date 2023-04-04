import React from 'react'
import './css/Price.css'

const Price = () => {
    return (
        <div className='PreceCont'>
            <iframe src="/price.pdf" id='iframe' title="myFrame"></iframe>
        </div>
    )
}

export default Price
