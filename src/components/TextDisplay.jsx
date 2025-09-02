// src/components/TextDisplay.jsx
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 12,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const Character = styled('span')(({ correct, current, theme }) => ({
  color: correct ? theme.palette.success.main : theme.palette.error.main,
  backgroundColor: current ? 'rgba(124, 77, 255, 0.2)' : 'transparent',
  padding: current ? '2px 0' : '2px 0',
  borderRadius: current ? 3 : 0,
}));

const TextDisplay = ({ text, userInput, currentIndex }) => {
  const renderText = () => {
    return text.split('').map((char, index) => {
      let status = 'pending';
      
      if (index < userInput.length) {
        status = char === userInput[index] ? 'correct' : 'incorrect';
      }
      
      return (
        <Character
          key={index}
          correct={status === 'correct'}
          current={index === currentIndex}
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
          fontSize: '1.2rem',
          fontFamily: '"Roboto Mono", monospace',
          minHeight: 150,
        }}
      >
        {renderText()}
      </Typography>
    </StyledPaper>
  );
};

export default TextDisplay;