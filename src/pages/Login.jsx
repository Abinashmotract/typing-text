// src/pages/Login.jsx
import { useState } from 'react'
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Link,
  Alert,
  Snackbar
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Button from '../components/Button'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  margin: '0 auto',
  backgroundColor: theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(124, 77, 255, 0.2)'
      : 'rgba(124, 77, 255, 0.1)'
  }`,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 8px 32px 0 rgba(124, 77, 255, 0.2)'
      : '0 8px 32px 0 rgba(124, 77, 255, 0.1)'
}))

const Login = () => {
  const { login, error } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'error'
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    const result = await login(formData.identifier, formData.password)

    if (result.success) {
      setSnackbar({
        open: true,
        message: 'Login successful!',
        severity: 'success'
      })
      navigate('/')
    } else {
      setSnackbar({ open: true, message: result.message, severity: 'error' })
    }

    setLoading(false)
  }

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <Container maxWidth='sm' sx={{ py: 8 }}>
      <StyledPaper elevation={3}>
        <Typography
          variant='h4'
          component='h1'
          align='center'
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #7c4dff, #ff4081)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Login
        </Typography>

        <Typography
          variant='body2'
          align='center'
          color='textSecondary'
          sx={{ mb: 3 }}
        >
          Welcome back! Sign in to continue your typing journey.
        </Typography>

        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            placeholder='Email or Phone Number'
            name='identifier'
            value={formData.identifier}
            onChange={handleChange}
            margin='normal'
            required
            variant='outlined'
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 12,
                fontFamily: '"Roboto Mono", monospace'
              }
            }}
          />

          <TextField
            fullWidth
            placeholder='Password'
            name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            margin='normal'
            required
            variant='outlined'
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 12,
                fontFamily: '"Roboto Mono", monospace'
              }
            }}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, py: 1.5 }}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>

          <Box textAlign='center'>
            <Typography variant='body2' color='textSecondary'>
              Don't have an account?{' '}
              <Link component={RouterLink} to='/signup' color='primary'>
                Sign up
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
  )
}

export default Login
