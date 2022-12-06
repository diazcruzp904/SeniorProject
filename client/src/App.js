import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/HomePage/HomePage'
import AboutUs from './Pages/AboutUs/AboutUs'
import ServicePage from './Pages/ServicesPage/Services'
import Login from './Pages/Login/Login'
import CreateAccount from './Pages/Login/CreateAccount'

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='NavBar'>
          <Link to="/"> Home </Link>
          <Link to="/AboutUs"> About </Link>
          <Link to="/Services"> Services </Link>
          <Link to="/Login"> Login </Link>
        
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Services" element={<ServicePage/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/CreateAccount" element={<CreateAccount/>} />
          </Routes>
        </div>
      </Router>
      
      <div className='footer'>
        <footer>
          <div className='ContactUsFooter'>
            <h3>Contact Us</h3>
            <p> 509 Meldrum Ln, Orange Park, Fl 32065</p>
            <p><a href="tel:123-456-7890">904-720-8035</a></p>
            <p><a href="mailto:hege@example.com">ChelsieJuanita904@gmail.com</a></p>
            </div>
          <div className='HoursFooter'>
            <h3>Hours Open</h3>
            <p>Monday: Closed</p>
            <p>Tuesday- Friday: 10am - 5pm</p>
            <p>Satuday: 8am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
