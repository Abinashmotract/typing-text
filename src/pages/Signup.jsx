// src/pages/Signup.jsx
import { useState } from 'react';
import { Container, Paper, Box, Typography, TextField, Link, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '../components/Button';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 800,
  margin: '0 auto',
  backgroundColor: theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(124, 77, 255, 0.2)' : 'rgba(124, 77, 255, 0.1)'}`,
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 8px 32px 0 rgba(124, 77, 255, 0.2)'
    : '0 8px 32px 0 rgba(124, 77, 255, 0.1)',
}));

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    if (formData.phoneNumber && !/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be exactly 10 digits';
    }
    if (formData.password && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    const result = await signup({
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    });
    if (result.success) {
      setSnackbar({ open: true, message: result.message || 'Signup successful! Please login.', severity: 'success' });
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setSnackbar({ open: true, message: result.message, severity: 'error' });
    }
    setLoading(false);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="false" sx={{ py: 8 }}>
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ 
          fontWeight: 700,
          background: 'linear-gradient(45deg, #7c4dff, #ff4081)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Create Account
        </Typography>
        
        <Typography variant="body2" align="center" color="textSecondary" sx={{ mb: 3 }}>
          Join us to track your typing progress and improve your skills.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            error={!!errors.name}
            helperText={errors.name}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 12,
                fontFamily: '"Roboto Mono", monospace',
              },
            }}
          />
          
          <TextField
            fullWidth
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 12,
                fontFamily: '"Roboto Mono", monospace',
              },
            }}
          />
          
          <TextField
            fullWidth
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            margin="normal"
            required
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 12,
                fontFamily: '"Roboto Mono", monospace',
              },
            }}
          />
          
          <TextField
            fullWidth
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            error={!!errors.password}
            helperText={errors.password}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 12,
                fontFamily: '"Roboto Mono", monospace',
              },
            }}
          />
          
          <TextField
            fullWidth
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            required
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 12,
                fontFamily: '"Roboto Mono", monospace',
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.5 }}
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>

          <Box textAlign="center">
            <Typography variant="body2" color="textSecondary">
              Already have an account?{' '}
              <Link component={RouterLink} to="/login" color="primary">
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      </StyledPaper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Signup;