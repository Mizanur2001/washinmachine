import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App;
