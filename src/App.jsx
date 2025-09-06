// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { TypingTestProvider, useTypingTest } from "./context/TypingTestContext";
import TypingTest from "./pages/TypingTest";
import "./index.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import { AuthProvider } from './context/AuthContext';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Light mode palette
          primary: {
            main: "#7c4dff",
            light: "#9c75ff",
            dark: "#5c2fc9",
          },
          secondary: {
            main: "#ff4081",
            light: "#ff79b0",
            dark: "#c60055",
          },
          background: {
            default: "#f5f5f7",
            paper: "rgba(255, 255, 255, 0.8)",
          },
          text: {
            primary: "#2d2d2d",
            secondary: "#666666",
          },
        }
      : {
          // Dark mode palette
          primary: {
            main: "#7c4dff",
            light: "#9c75ff",
            dark: "#5c2fc9",
          },
          secondary: {
            main: "#ff4081",
            light: "#ff79b0",
            dark: "#c60055",
          },
          background: {
            default: "#121212",
            paper: "rgba(30, 30, 30, 0.8)",
          },
          text: {
            primary: "#ffffff",
            secondary: "rgba(255, 255, 255, 0.7)",
          },
        }),
  },
  typography: {
    fontFamily: '"Roboto Mono", monospace',
  },
  shape: {
    borderRadius: 16,
  },
});

// Create a wrapper component that uses the context
function ThemeWrapper({ children }) {
  const { state } = useTypingTest();
  const theme = createTheme(getDesignTokens(state.theme));
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function App() {
  return (
    <TypingTestProvider>
      <AuthProvider>
        <ThemeWrapper>
          <CssBaseline />
          <Router>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<TypingTest />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </Router>
        </ThemeWrapper>
      </AuthProvider>
    </TypingTestProvider>
  );
}
export default App;
