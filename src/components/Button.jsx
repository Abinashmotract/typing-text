// src/components/Button.jsx
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, variant = 'contained', color = 'primary', onClick, ...props }) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 600,
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;