import React, { useState } from 'react';
import "./Header.scss"
import { taskerlogin } from '../api/taskerApi';

interface TaskerLoginFormProps {
  onClose: () => void;
}

const TaskerLoginForm: React.FC<TaskerLoginFormProps> = ({ onClose }) => {

  const [taskerEmail, setTaskerEmail] = useState<string>("")
  const [taskerPassword, setTaskerPassword] = useState<string>("")

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    console.log("tasker is connected")
    try {
      event.preventDefault();

      const response = await taskerlogin(taskerEmail, taskerPassword)
      console.log(response);
      onClose();
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
    
      <p
      style={{
        textAlign: 'left', 
        width: '350px',
        margin: '-20px -0px -15px -15px' ,
        fontSize: '12px',
        fontWeight: 'bold'
      }}
      >Email Address</p>
      
      <input type="email" className='field' placeholder="Email" required 
            value={taskerEmail} onInput={(ev) => setTaskerEmail((ev.target as HTMLInputElement).value)}
      // style={{ marginTop: '-30px' }}
      />
            <p
      style={{
        textAlign: 'left', 
        width: '350px',
        margin: '20px -0px -15px -15px' ,
        fontSize: '12px',
        fontWeight: 'bold'
      }}
      >Password</p>
      <input type="password" className='field' placeholder="Password" required 
            value={taskerPassword} onInput={(ev) => setTaskerPassword((ev.target as HTMLInputElement).value)}
      />
      <button type="submit"
      style={{
        marginTop: '30px',
        height: '45px',
        width: '350px',
        borderRadius: '45px',
        backgroundColor: 'green',
        color: 'white'
    }}
      >Log In</button>
            <p style={{
                    width: '350px',
                    textAlign: 'center',
                    marginTop: '30px'
                }}>
                    Signed up with   
                   
                </p>
                <p style={{
                    width: '350px',
                    textAlign: 'center',
                    margin: '-15px 50px'
                }}>
                       
                    Facebook or Google? <a href="">Create Password </a> .
                </p>
      <button type="button" onClick={onClose}
      style={{
        marginTop: '15px',
      }}
      >Close</button>
    </form>
  );
};

export default TaskerLoginForm;
