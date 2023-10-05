import React from 'react';
import { Link } from 'react-router-dom';
import SolarSmart from "../../images/solarsmart.png"
import Meg from "../../images/meg.png";
import Footer from '../nav/Footer';


function About() {
    return (
    <body className='bakgrunn'>
    <div className='container'>
    <div className='projects'>
    <div className='project'>
        <img className='solarsmart' src={SolarSmart} alt='image of solar smart website'/>
        <h3> Solar smart</h3>
        <p>Solar smart is my ownproject i creayed on a school project.</p>
    </div>
    </div>
    <div className='image'>
    <img className='meg' src={Meg} alt="sneek peak of project"/>
    </div>
      </div>
    <Footer></Footer>  
    </body>
    
  );
  }


export default About;
