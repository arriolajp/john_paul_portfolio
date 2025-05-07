import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-box">
      <p>Current time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimeDisplay;