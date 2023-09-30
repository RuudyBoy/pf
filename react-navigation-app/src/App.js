import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
