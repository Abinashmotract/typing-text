// src/App.jsx
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TypingTestProvider } from './context/TypingTestContext';
import TypingTest from './pages/TypingTest';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c4dff',
      light: '#9c75ff',
      dark: '#5c2fc9',
    },
    secondary: {
      main: '#ff4081',
      light: '#ff79b0',
      dark: '#c60055',
    },
    background: {
      default: '#121212',
      paper: 'rgba(30, 30, 30, 0.8)',
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", monospace',
  },
  shape: {
    borderRadius: 16,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TypingTestProvider>
        <div className="App">
          <TypingTest />
        </div>
      </TypingTestProvider>
    </ThemeProvider>
  );
}

export default App;