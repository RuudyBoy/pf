import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Logo from "../../images/logo.png"


function Nav () {
    return(
<Router> 
<nav>
<ul>
<img className='logo' src={Logo} alt="sneek peak of project"/>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
</ul>
</nav>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About />} />
</Routes>
</Router>
    );
}

export default Nav;




