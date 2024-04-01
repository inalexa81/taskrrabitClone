import React, { useEffect, useState } from 'react';
import './Create-a-Task.scss';
import { getTaskersByCategory } from '../api/taskerApi';
import ThreeWeekCalendar from '../components/ThreeWeekCalendar';

interface TaskerPickTaskerFormProps {
  onNext: () => void;
}

const TaskerPickTaskerForm: React.FC<TaskerPickTaskerFormProps> = ({ onNext }) => {
  const [selectedTasker, setSelectedTasker] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [taskers, setTaskers] = useState<any[]>([]);
  const [showDateTimeWindow, setShowDateTimeWindow] = useState(false);
  const [date, setDate] = useState(new Date()); // Default date to today

  const fetchTaskers = async (category: string) => {
    try {
      const response = await getTaskersByCategory(category);
      setTaskers(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching taskers:', error);
      setError('Failed to fetch taskers. Please try again later.');
    }
  };

  useEffect(() => {
    const actionCategory = localStorage.getItem('selectedAction');
    if (actionCategory) {
      fetchTaskers(actionCategory);
    }
  }, []);

  const handleSelectContinue = () => {
    // Set showDateTimeWindow to true to display the date and hour window
    setShowDateTimeWindow(true);

    console.log('handleSelectContinue');
  };

  const onChange = (value: Date) => {
    if (Array.isArray(value)) {
      // Handle multi-date selection if needed
    } else {
      setDate(value);
    }
  };

  const handleTaskerSelect = (tasker: string) => {
    setSelectedTasker(tasker);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onNext();
  };

  return (
    <div className="TaskerPickTaskerForm-Container">
      <div className="searchParams">
        <h2>Date</h2>
        <div className="buttonsContainer">
          <button className="searchButton">Today</button>
          <button className="searchButton">Within 3 Days</button>
        </div>
        <div className="buttonsContainer">
          <button className="searchButton">Within a Week</button>
          <button className="searchButton">Choose Dates</button>
        </div>
      </div>
      <form className="taskerForm" onSubmit={handleSubmit}>
        <ul className="tasker-list">
          {taskers.map((tasker, index) => (
            <li key={index} className="tasker-item">
              <div className="tasker-info">
                <div className="tasker-left">
                  <img className="taskerPhoto" src={tasker.taskerPhoto} alt={`${tasker.taskerFirstName} ${tasker.taskerLastName}`} />

                  <button className="select-tasker-btn" type="button" onClick={handleSelectContinue}>
                    Select&Continue
                  </button>

                  {/* Modal overlay and date and hour window */}
                  {showDateTimeWindow && (
                    <div className="modalOverlay">
                      <div className="dateHourWindow">
                        <h2 className="dateWindowHeader">Choose your task date and start time:</h2>
                        <ThreeWeekCalendar 
                        onChange={onChange} 
                        value={date} />

                        <button className="closeButton" onClick={() => setShowDateTimeWindow(false)}>
                          &times;
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="tasker-right">
                  <div className="tasker-name-rate">
                    <div className="tasker-name">
                      {tasker.taskerFirstName} {tasker.taskerLastName}
                    </div>
                    <div className="tasker-rate">{tasker.hourlyRate} / hr</div>
                  </div>
                  <div className="tasker-category">Field of specialty: {tasker.taskerCategory}</div>
                  <div className="tasker-about">
                    How I can help: <br></br> {tasker.taskerAbout}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default TaskerPickTaskerForm;
