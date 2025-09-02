// src/context/TypingTestContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const TypingTestContext = createContext();

// Check if user has a theme preference in localStorage
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    // Check for system preference
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  // Default to dark theme
  return 'dark';
};

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
  theme: getInitialTheme(),
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
      return { ...initialState, text: state.text, theme: state.theme };
    case 'UPDATE_STATS':
      return { ...state, ...action.payload };
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('color-theme', newTheme);
      }
      return { ...state, theme: newTheme };
    default:
      return state;
  }
}

export const TypingTestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(typingTestReducer, initialState);

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (state.theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [state.theme]);

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