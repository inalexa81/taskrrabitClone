
import React, { useState }  from 'react';
import "./Be-a-Tasker.scss";
import { taskerSignUp } from '../api/taskerApi.ts';


interface TaskerSignUpFormProps {
  onClose: () => void;
}


const TaskerSignUpForm: React.FC<TaskerSignUpFormProps> = ({ onClose }) => {

const [taskerEmail, setTaskerEmail] = useState<string>("")
const [taskerPassword, setTaskerPassword] = useState<string>("")
const [taskerFirstName, setTaskerFirstName] = useState<string>("")
const [taskerLastName, setTaskerLastName] = useState<string>("")
const [taskerPhone, setTaskerPhone] = useState<string>("")
const [hourlyRate, setHourlyRate] = useState<string>("")
const [taskerCategory, setTaskerCategory] = useState<string>("")
const [taskerPhoto, setTaskerPhoto] = useState<string>("")



  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    console.log("tasker connected")
    try {
      event.preventDefault();
      const response = await taskerSignUp(taskerFirstName, taskerLastName, taskerEmail, taskerPhone, taskerPassword, hourlyRate,taskerCategory,taskerPhoto)
      console.log(response);


      // Logic to handle sign-up form submission
      onClose();
    } catch (error) {
      console.error(error)
    }

  };  


  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

       <h1>Create your account</h1> 

       <p></p>
      
      {/* Form fields for sign-up */}
      <input type="text" className='field' placeholder="First Name" required 
      style={{ marginTop: '-30px' }} 
      value={taskerFirstName} onInput={(ev) => setTaskerFirstName((ev.target as HTMLInputElement).value)}
      />
      <input type="text"  className='field' placeholder="Last Name" required 
      value={taskerLastName} onInput={(ev) => setTaskerLastName((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
      <input type="text" className='field' placeholder="Email Address " required 
      value={taskerEmail} onInput={(ev) => setTaskerEmail((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
      <input type="text" className='field' placeholder="Phone Number" required 
      value={taskerPhone} onInput={(ev) => setTaskerPhone((ev.target as HTMLInputElement).value)}
              // style={{marginLeft: '10px'}}
      />
      
      <input type="password" className='field' placeholder="Password" required 
      value={taskerPassword} onInput={(ev) => setTaskerPassword((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
      <input type="text" className='field' placeholder="Hourly Rate" required 
      value={hourlyRate} onInput={(ev) => setHourlyRate((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
            <input type="text" className='field' placeholder="Field of expertise" required 
      value={taskerCategory} onInput={(ev) => setTaskerCategory((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
            <input type="text" className='field' placeholder="Photo" required 
      value={taskerPhoto} onInput={(ev) => setTaskerPhoto((ev.target as HTMLInputElement).value)}
      // style={{ marginBottom: '10px' }} 
      />
      <p style={{
                    width: '350px',
                    textAlign: 'center',
                    margin: '30px 50px'
                }}>
                    By clicking below and creating an account, I agree to <a href="">Terms of Service </a> and <a href="">Privacy Policy</a>.
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

export default TaskerSignUpForm;
