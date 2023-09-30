
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';


function Nav () {
    return(
<Router> 
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
</Router>
    );
}

export default Nav;




