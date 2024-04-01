// TaskDetailsForm.tsx
import React, { useState } from 'react';
import "./Create-a-Task.scss";

interface TaskDetailsFormProps {
  onNext: () => void;
}

const TaskDetailsForm: React.FC<TaskDetailsFormProps> = ({ onNext }) => {
  const [taskDetails, setTaskDetails] = useState({
    task: localStorage.getItem('selectedTask') || '',
    location: '',
    duration: '',
    details: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setTaskDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
    localStorage.setItem(name, value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNext();
  };

  return (
    <div className="TaskDetailsForm-Container">
    <h1 className="task">{localStorage.getItem('selectedAction')}</h1>   
    <form className="form" onSubmit={handleSubmit}>
      <h2 id="header">Your task location</h2>
      <input className="location" type="text" name="location" value={taskDetails.location} onChange={handleChange} placeholder="  Location" required />
      <h2 id="header">How big is your task?</h2>
      <select className="select" name="duration" value={taskDetails.duration} onChange={handleChange} required>
        <option value=""> Select Duration</option>
        <option value="1 hour"> Small - Est. 1 hr</option>
        <option value="2 hours"> Medium - Est. 2-3 hrs</option>
        <option value="3 hours"> Large - Est. 4+ hrs</option>
      </select>
      <h2 id="header">Tell us the details of your task</h2>
      <input 
      className="details" 
      type= "text"
      name="details"
      value={taskDetails.details} onChange={handleChange} placeholder=" Details"  />
      <button className="button" type="submit">See Taskers&Prices</button>
    </form>
    </div>
  );
};

export default TaskDetailsForm;
