// src/context/TypingTestContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const TypingTestContext = createContext();

const initialState = {
  text: '',
  userInput: '',
  startTime: null,
  endTime: null,
  isTyping: false,
  isFinished: false,
  wpm: 0,
  accuracy: 100,
  errors: 0,
  totalChars: 0,
  currentIndex: 0,
};

function typingTestReducer(state, action) {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'SET_USER_INPUT':
      return { ...state, userInput: action.payload };
    case 'START_TYPING':
      return { ...state, isTyping: true, startTime: new Date() };
    case 'FINISH_TYPING':
      return { ...state, isTyping: false, isFinished: true, endTime: new Date() };
    case 'RESET_TEST':
      return { ...initialState, text: state.text };
    case 'UPDATE_STATS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const TypingTestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(typingTestReducer, initialState);

  return (
    <TypingTestContext.Provider value={{ state, dispatch }}>
      {children}
    </TypingTestContext.Provider>
  );
};

export const useTypingTest = () => {
  const context = useContext(TypingTestContext);
  if (!context) {
    throw new Error('useTypingTest must be used within a TypingTestProvider');
  }
  return context;
};