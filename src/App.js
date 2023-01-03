import './App.css';
import Navbar from './components/Navbar';
import UpperCategory from './components/UpperCategory';
import MainSection from './components/MainSection';
import BenefitsWM from './components/BenefitsWM';
import UserRating from './components/UserRating';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <UpperCategory />
      <MainSection />
      <BenefitsWM />
      <UserRating />
      <Footer />
    </>
  )
}

export default App;
