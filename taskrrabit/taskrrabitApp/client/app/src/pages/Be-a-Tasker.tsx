import React, { useState } from 'react';
import "./Be-a-Tasker.scss";
import { Link } from 'react-router-dom';
import TaskerSignUpForm from './TaskerSignUpForm';
import TaskerLoginForm from './TaskerLogin';




const BeATasker: React.FC = () => {

   const [showTaskerSignUpForm, setShowTaskerSignUpForm] = useState<boolean>(false);
   const [showTaskerLoginForm, setShowTaskerLoginForm] = useState<boolean>(false);

   const showTaskerSignUp = () => {
      setShowTaskerSignUpForm(true);
      setShowTaskerLoginForm(false)
  };

  const showTaskerLogin = () => {
   setShowTaskerLoginForm(true);
   setShowTaskerSignUpForm(false)
  };

  return (
    <div className="be-a-tasker-container">
      <div className="top-area">
      <Link to="/" id="site-header">
            taskrabbit
            </Link>
      </div>
      <div className='taskerRegisterContainer'>
         <div className='image'>
                
         </div>
         <div className="moneyEarningCalc">
           <a id="topic">Earn money your way</a> 
           <p id="paragraph">See how much you can make <br />
            tasking on TaskRabbit</p>
            {showTaskerSignUpForm && (
        <div>
          <TaskerSignUpForm onClose={() => setShowTaskerSignUpForm(false)} />
        </div>
      )} 
            {showTaskerLoginForm && (
        <div>
          <TaskerLoginForm onClose={() => setShowTaskerLoginForm(false)} />
        </div>
      )} 

            {!showTaskerSignUpForm && !showTaskerLoginForm && ( 
        <div>
                <button style={{
                    // marginTop: '10px',
                    height: '45px',
                    width: '350px',
                    borderRadius: '45px',
                    backgroundColor: 'green',
                    color: 'white'
                }}
                onClick={showTaskerSignUp}>
                    Sign up
                </button>
                <button style={{
                    marginTop: '25px',
                    height: '45px',
                    width: '350px',
                    border: '1px solid green',
                    borderRadius: '45px',
                    backgroundColor: 'white',
                    color: 'green'
                }}
                onClick={showTaskerLogin}>
                    Log in
                </button>
                <p style={{
                    width: '350px',
                    textAlign: 'center',
                    margin: '30px 50px'
                }}>
                    By signing up you agree to our <a href="">Terms of Use </a>  
                     and <a href="">Privacy Policy</a>.
                </p>
            </div>
            )}   
         </div>
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

export default BeATasker