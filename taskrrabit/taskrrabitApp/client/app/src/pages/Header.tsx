import React, { useState } from 'react';
import './Header.scss';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

// export function Header() {
    const Header: React.FC = () => {
        const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false);
        const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

        const showSignUp = () => {
            setShowSignUpForm(true);
            setShowLoginForm(false)
        };

        const showLogin = () => {
            setShowLoginForm(true);
            setShowSignUpForm(false)
        };


    return (
        <div className='headerContainer'>
            
            <div className='signUp_Login_box' style={{
                marginTop: '-265px',
                borderRadius: '20px',
                backgroundColor: 'white',
                height: 'auto',
                width: '450px',
                
            }}>
                <h1 style={{
                    paddingTop: '15px',
                    fontSize: '70px'
                }}>taskrabbit</h1>

                      {/* Sign-up form */}
      {showSignUpForm && (
        <div>
          <SignUpForm onClose={() => setShowSignUpForm(false)} />
        </div>
      )}

      {/* Login form */}
      {showLoginForm && (
        <div>
          <LoginForm onClose={() => setShowLoginForm(false)} />
        </div>
      )}
      {!showSignUpForm && !showLoginForm && ( 
        <div>
                <button style={{
                    // marginTop: '10px',
                    height: '45px',
                    width: '350px',
                    borderRadius: '45px',
                    backgroundColor: 'green',
                    color: 'white'
                }}
                onClick={showSignUp}>
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
                onClick={showLogin}>
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
        </div>
    )
}

export default Header;
