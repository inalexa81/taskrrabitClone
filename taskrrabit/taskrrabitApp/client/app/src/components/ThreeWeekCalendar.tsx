import React, { useState } from 'react';
import './ThreeWeekCalendar.scss';

interface ThreeWeekCalendarProps {
  onChange: (date: Date) => void;
  value: Date;
}

const ThreeWeekCalendar: React.FC<ThreeWeekCalendarProps> = ({ onChange, value }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getWeeksInMonth = (month: number, year: number) => {
    const weeksInMonth = [];
    const daysInMonth = getDaysInMonth(month, year);
    let week = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      week.push(date);

      if (week.length === 7) {
        weeksInMonth.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      weeksInMonth.push(week);
    }

    return weeksInMonth;
  };

  const renderWeek = (week: Date[]) => {
    return (
      <div className="week">
        {week.map((day, index) => (
          <div
            key={index}
            className={`day ${value.getDate() === day.getDate() && value.getMonth() === day.getMonth() ? 'selected' : ''}`}
            onClick={() => onChange(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    );
  };

  const renderThreeWeeks = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const weeksInMonth = getWeeksInMonth(month, year);

    return (
      <div className="three-week-calendar">
        <div className="calendar-header">
          <button onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}>Prev</button>
          <span>{`${monthNames[month]} ${year}`}</span>
          <button onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}>Next</button>
        </div>
        <div className="calendar-body">
          <div className="day-names">
            {daysInWeek.map((day) => (
              <div key={day} className="day-name">
                {monthNames[new Date(2024, 0, day).getDay()].slice(0, 3)}
              </div>
            ))}
          </div>
          {weeksInMonth.slice(0, 3).map((week, index) => renderWeek(week))}
        </div>
      </div>
    );
  };

  return <div>{renderThreeWeeks()}</div>;
};

export default ThreeWeekCalendar;