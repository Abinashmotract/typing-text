// src/components/ThemeToggle.jsx
import { IconButton, Tooltip, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTypingTest } from '../context/TypingTestContext';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#ffd54f' : '#7c4dff',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 213, 79, 0.5)' : 'rgba(124, 77, 255, 0.5)'}`,
  borderRadius: '50%',
  padding: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 213, 79, 0.1)' : 'rgba(124, 77, 255, 0.1)',
    transform: 'rotate(30deg)',
  },
}));

const ThemeToggle = () => {
  const { state, dispatch } = useTypingTest();
  const { theme } = state;

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <Tooltip title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      <StyledIconButton onClick={toggleTheme} aria-label="toggle theme">
        {theme === 'dark' ? (
          <LightModeIcon sx={{ fontSize: 28 }} />
        ) : (
          <DarkModeIcon sx={{ fontSize: 28 }} />
        )}
      </StyledIconButton>
    </Tooltip>
  );
};

export default ThemeToggle;