import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navBar'; // Adjust path if necessary
import Home from './Pages/Home';
import Podcasts from './Pages/Podcasts';
import Guests from './Pages/Guests';
import Login from './Pages/Login';
import './App.css';

function App() {
  return (
    <Router className="App">
    
       <NavBar></NavBar> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    
    </Router>
  );
}

export default App;
