import React from 'react'
import './css/BenefitsWM.css'
import wm from '../assets/wm.png'

const BenefitsWM = () => {
    return (
        <div className='benefitsWM'>
            <div className='benefitWMContRapp'>
                <div className='benefitWMCont cont1'>
                    <p>Delivery within 4 to 5 days . you can also use <b>EXPRESS</b> service for fastest delivery</p>
                </div>
                <div className='benefitWMCont cont2'>
                    <p>We use warm and cold <b> drinkable water </b> as per requirement</p>
                </div>
                <div className='benefitWMCont cont3'>
                    <p>We work in few steps to give you  <b> better experience</b></p>

                </div>
            </div>
            <div className='firstLine'></div>
            <div className='secondLine'></div>
            <div className='thirdLine'></div>
            <div className='forthLine'></div>
            <div className='fifthLine'></div>
            <img src={wm} alt="" />
            <div className='sixthLine'></div>
            <div className='sevLine'></div>
            <div className='eighLine'></div>
            <div className='nineLine'></div>
            <div className='tenLine'></div>
            <div className='benefitWMContRapp'>
                <div className='benefitWMCont cont4'>
                    <p>No need to go outside we pick up and delivered <b> door to door</b></p>
                </div>
                <div className='benefitWMCont cont5'>
                    <p>You can chose Pick up date in <b> one click</b></p>
                </div>
                <div className='benefitWMCont cont6'>
                    <p>In <b> laundry wash </b> and <b> soft  wash  </b> we do not take any extra charges for <b> steam iron </b> and  <b> packaging</b></p>
                </div>
            </div>
        </div>
    )
}

export default BenefitsWM
