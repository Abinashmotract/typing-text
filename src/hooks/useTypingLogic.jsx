// src/hooks/useTypingLogic.jsx
import { useEffect } from 'react';
import { useTypingTest } from '../context/TypingTestContext';
import { calculateWPM } from '../utils/calculateWPM';
import { generateRandomText } from '../utils/randomText';

export const useTypingLogic = () => {
  const { state, dispatch } = useTypingTest();

  useEffect(() => {
    if (!state.text) {
      const newText = generateRandomText();
      dispatch({ type: 'SET_TEXT', payload: newText });
    }
  }, [state.text, dispatch]);

  useEffect(() => {
    if (state.isTyping && state.userInput.length === state.text.length) {
      dispatch({ type: 'FINISH_TYPING' });
    }
  }, [state.userInput, state.text, state.isTyping, dispatch]);

  useEffect(() => {
    if (state.isFinished) {
      const wpm = calculateWPM(
        state.userInput,
        state.startTime,
        state.endTime
      );
      
      let errors = 0;
      for (let i = 0; i < state.userInput.length; i++) {
        if (state.userInput[i] !== state.text[i]) {
          errors++;
        }
      }
      
      const accuracy = Math.max(
        0,
        Math.round(
          ((state.userInput.length - errors) / state.userInput.length) * 100
        )
      );
      
      dispatch({
        type: 'UPDATE_STATS',
        payload: { wpm, accuracy, errors, totalChars: state.userInput.length },
      });
    }
  }, [state.isFinished, state.userInput, state.text, state.startTime, state.endTime, dispatch]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    
    if (!state.isTyping && value.length > 0) {
      dispatch({ type: 'START_TYPING' });
    }
    
    dispatch({ type: 'SET_USER_INPUT', payload: value });
    
    // Calculate current index for cursor position
    const newIndex = value.length;
    dispatch({ type: 'UPDATE_STATS', payload: { currentIndex: newIndex } });
  };

  const resetTest = () => {
    dispatch({ type: 'RESET_TEST' });
    const newText = generateRandomText();
    dispatch({ type: 'SET_TEXT', payload: newText });
  };

  return {
    text: state.text,
    userInput: state.userInput,
    isTyping: state.isTyping,
    isFinished: state.isFinished,
    wpm: state.wpm,
    accuracy: state.accuracy,
    errors: state.errors,
    totalChars: state.totalChars,
    currentIndex: state.currentIndex,
    handleInputChange,
    resetTest,
  };
};