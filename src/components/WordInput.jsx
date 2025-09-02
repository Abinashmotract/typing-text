// src/components/WordInput.jsx
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '1.1rem',
    '& fieldset': {
      borderColor: theme.palette.grey[700],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  },
}));

const WordInput = ({ value, onChange, disabled, placeholder }) => {
  return (
    <StyledTextField
      fullWidth
      multiline
      minRows={2}
      maxRows={4}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder || "Start typing..."}
      variant="outlined"
      autoFocus
    />
  );
};

export default WordInput;