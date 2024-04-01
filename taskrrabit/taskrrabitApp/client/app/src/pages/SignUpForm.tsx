
import React, { useState }  from 'react';
import "./Header.scss";
import { signUp } from '../api/userApi.ts';


interface SignUpFormProps {
  onClose: () => void;
}


const SignUpForm: React.FC<SignUpFormProps> = ({ onClose }) => {

  const [email, setEmail] = useState<string>("")
const [password, setPassword] = useState<string>("")
const [firstName, setFirstName] = useState<string>("")
const [lastName, setLastName] = useState<string>("")
const [phone, setPhone] = useState<string>("")
const [zipCode, setZipCode] = useState<string>("")



  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    console.log("user connected")
    try {
      event.preventDefault();
      const response = await signUp(firstName, lastName, email, phone, password, zipCode)
      console.log(response);


      // Logic to handle sign-up form submission
      onClose();
    } catch (error) {
      console.error(error)
    }

  };  


  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      
      {/* Form fields for sign-up */}
      <input type="text" className='field' placeholder="First Name" required 
      style={{ marginTop: '-30px' }} 
      value={firstName} onInput={(ev) => setFirstName((ev.target as HTMLInputElement).value)}
      />
      <input type="text"  className='field' placeholder="Last Name" required 
      value={lastName} onInput={(ev) => setLastName((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
      <input type="email" className='field' placeholder="Email Address " required 
      value={email} onInput={(ev) => setEmail((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
      <input type="text" className='field' placeholder="Phone Number" required 
      value={phone} onInput={(ev) => setPhone((ev.target as HTMLInputElement).value)}
              // style={{marginLeft: '10px'}}
      />
      
      <input type="password" className='field' placeholder="Password" required 
      value={password} onInput={(ev) => setPassword((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
      <input type="text" className='field' placeholder="Zip Code" required 
      value={zipCode} onInput={(ev) => setZipCode((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
      <p style={{
                    width: '350px',
                    textAlign: 'center',
                    margin: '30px 50px'
                }}>
                    By clicking below and creating an account, I agree to 
                    TaskRabbit’s <a href="">Terms of Use </a> and <a href="">Privacy Policy</a>.
                </p>
                <button type="submit"
      style={{
        height: '45px',
        width: '350px',
        borderRadius: '45px',
        backgroundColor: 'green',
        color: 'white'
    }}
      >Creat account</button>
            <button type="button" onClick={onClose}
      style={{
        marginTop: '15px',
      }}
      >Close</button>
    </form>
  );
};

export default SignUpForm;
