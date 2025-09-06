// src/components/Timer.jsx
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Timer = ({ isActive, onTimeUpdate }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          if (onTimeUpdate) onTimeUpdate(newTime);
          return newTime;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isActive, time, onTimeUpdate]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  return (
    <Typography variant="h4" component="div" sx={{ fontFamily: '"Roboto Mono", monospace' }}>
      {formatTime(time)}
    </Typography>
  );
};
export default Timer;