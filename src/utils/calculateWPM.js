// src/utils/calculateWPM.js
export const calculateWPM = (text, startTime, endTime) => {
  if (!startTime || !endTime) return 0;
  const timeInMinutes = (endTime - startTime) / 1000 / 60;
  const words = text.trim().split(/\s+/).length;
  return Math.round(words / timeInMinutes);
};