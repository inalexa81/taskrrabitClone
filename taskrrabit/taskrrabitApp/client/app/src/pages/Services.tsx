import React, { useState } from 'react';
import "./Services.scss";
import { Link } from 'react-router-dom';
import Routes from '../routes/routes';
import Header from './Header';




const Services = () => {

  return (
    <div className="home-container">
      <div className="top-area">
        <Link to="/" id="site-header">
            taskrabbit
            </Link>
         <div className="buttons">
            <button className="button" >
                Services
            </button>
            <Link to="/Header"  
            className="button" 
            >
            Sign up / Log in
            </Link>

            <button id="be-a-tasker">
            Become a Tasker
            </button>
            </div>   
      </div>
      <div className='image'>
                Your to-do list is on us
      </div>
      <button id="help">
                 <p style={{
                    border: '2px solid white',
                    borderRadius: '50%',
                    color: 'white',
                    marginTop: '2px',
                    width: '20px',
                 }}>?</p> 
                 <p style={{
                    color: 'white',
                    marginTop: '-40px',
                    marginLeft: '30px',
                 }}>Help</p>
            </button>
    </div>
  )
}

export default Services