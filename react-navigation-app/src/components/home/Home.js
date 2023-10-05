import React from 'react';
import Meg from "../../images/meg.png";
import Footer from '../nav/Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <body className='bakgrunn'>
    <div className='container'>
    <div className='info'>
    <h1>Welcome to my portfolio!</h1>
    <p>A student who are finished with my frontend development studies at Noroff. My focus is on writing clean and efficient code. I am a big fan of React, HTML5, CSS/SCSS and plain Javascript. </p>
    <Link to="/about"><a className='cta-button'>My work</a></Link>
    </div>
    <div className='image'>
    <img className='meg' src={Meg} alt="sneek peak of project"/>
    </div>
      </div>
    <Footer></Footer>  
    </body>
    
  );
  }


export default Home;
