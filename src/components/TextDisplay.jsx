// src/components/TextDisplay.jsx
import { Paper, Typography, Box, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const pulseCorrect = keyframes`
  0% { background-color: rgba(76, 175, 80, 0.1); }
  50% { background-color: rgba(76, 175, 80, 0.3); }
  100% { background-color: rgba(76, 175, 80, 0.1); }
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.mode === 'dark' 
    ? 'rgba(30, 30, 30, 0.7)' 
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  position: 'relative',
  overflow: 'hidden',
  border: theme.palette.mode === 'dark' 
    ? '1px solid rgba(124, 77, 255, 0.2)' 
    : '1px solid rgba(124, 77, 255, 0.1)',
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 8px 32px 0 rgba(0, 0, 0, 0.36)' 
    : '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    animation: `${blink} 2s infinite`,
  },
}));

const Character = styled('span')(({ correct, current, theme, justTyped }) => ({
  color: correct ? theme.palette.success.main : theme.palette.error.main,
  backgroundColor: current ? 
    (theme.palette.mode === 'dark' ? 'rgba(124, 77, 255, 0.3)' : 'rgba(124, 77, 255, 0.1)') 
    : 'transparent',
  padding: current ? '2px 0' : '2px 0',
  borderRadius: current ? 3 : 0,
  position: 'relative',
  textShadow: correct && justTyped 
    ? (theme.palette.mode === 'dark' ? '0 0 8px rgba(76, 175, 80, 0.7)' : '0 0 5px rgba(76, 175, 80, 0.5)') 
    : 'none',
  animation: correct && justTyped ? `${pulseCorrect} 0.5s ease-in-out` : 'none',
  ...(!correct && justTyped && { animation: `${shake} 0.3s ease-in-out` }),
}));

const Cursor = styled('span')(({ theme }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: theme.palette.primary.main,
    animation: `${blink} 1s infinite`,
    boxShadow: `0 0 8px ${theme.palette.primary.main}`,
  },
}));

const TextDisplay = ({ text, userInput, currentIndex }) => {
  const renderText = () => {
    return text.split('').map((char, index) => {
      let status = 'pending';
      let justTyped = false;
      
      if (index < userInput.length) {
        status = char === userInput[index] ? 'correct' : 'incorrect';
        justTyped = index === userInput.length - 1;
      }
      
      if (index === currentIndex) {
        return (
          <Cursor key={index}>
            <Character
              correct={status === 'correct'}
              current={true}
              justTyped={justTyped}
            >
              {char}
            </Character>
          </Cursor>
        );
      }
      
      return (
        <Character
          key={index}
          correct={status === 'correct'}
          current={false}
          justTyped={justTyped}
        >
          {char}
        </Character>
      );
    });
  };

  return (
    <StyledPaper elevation={3}>
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.8,
          fontSize: '1.3rem',
          fontFamily: '"Roboto Mono", monospace',
          minHeight: 150,
          textShadow: theme => theme.palette.mode === 'dark' 
            ? '0 0 5px rgba(255, 255, 255, 0.1)' 
            : '0 0 3px rgba(0, 0, 0, 0.05)',
        }}
      >
        {renderText()}
      </Typography>
    </StyledPaper>
  );
};

export default TextDisplay;