import './App.css';
import Navbar from './components/Navbar';
// eslint-disable-next-line
import UpperCategory from './components/UpperCategory';
// eslint-disable-next-line
import MainSection from './components/MainSection';
// eslint-disable-next-line
import BenefitsWM from './components/BenefitsWM';
// eslint-disable-next-line
import UserRating from './components/UserRating';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <ContactUs />
      {/* <UpperCategory />
      <MainSection />
      <BenefitsWM />
      <UserRating /> */}
      <Footer />
    </>
  )
}

export default App;
