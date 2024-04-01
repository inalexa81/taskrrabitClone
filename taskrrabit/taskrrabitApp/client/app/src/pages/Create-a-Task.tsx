import React, { useState } from "react";
import "./Create-a-Task.scss";
import { Link } from 'react-router-dom';
import TaskDetailsForm from "./TaskDetailsForm";
import TaskerPickTaskerForm from "./TaskPickTaskerForm";


const CreateATask = () => {

  const [step, setStep] = useState(1);

  const handleNextStep: () => void = () => {
    setStep(step + 1)
  };

  const renderStep = () => {
    switch (step) {
      case 1 : 
        return <TaskDetailsForm 
          onNext={handleNextStep}/>;
      case 2: 
        return <TaskerPickTaskerForm 
          onNext={handleNextStep}/>;
      default: return null;         
    }
  }

  return (
    <div className="home-container">
      <div className="top-area">
        <Link to="/" id="site-header">
            taskrabbit
            </Link>
          
      </div>
        {renderStep()}
    </div>
  )
}

export default CreateATask 
