import React from 'react'
import steps from '../assets/stepsWashinmachine.png'
import './css/StepsOfWM.css'

const StepsOfWM = () => {
  return (
    <div className='stepsOfWMContainer'>
        <img src={steps} alt="stepsWashinmachine" />
    </div>
  )
}

export default StepsOfWM
