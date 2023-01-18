import React from 'react'
import UpperCategory from './UpperCategory';
import MainSection from './MainSection';
import BenefitsWM from './BenefitsWM';
import UserRating from './UserRating';
import StepsOfWM from './StepsOfWM';

const Home = () => {
  return (
    <div>
      <UpperCategory />
      <MainSection />
      <StepsOfWM />
      <BenefitsWM />
      <UserRating />
    </div>
  )
}

export default Home
