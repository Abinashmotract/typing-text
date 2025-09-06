// src/pages/Profile.jsx
import {
  Container,
  Paper,
  Box,
  Typography,
  Avatar,
  Grid,
  Chip
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Button from '../components/Button'
import { useTypingTest } from '../context/TypingTestContext'
import { useAuth } from '../context/AuthContext'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(124, 77, 255, 0.2)'
      : 'rgba(124, 77, 255, 0.1)'
  }`
}))

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(30, 30, 30, 0.5)'
      : 'rgba(255, 255, 255, 0.5)',
  borderRadius: 16,
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(124, 77, 255, 0.2)'
      : 'rgba(124, 77, 255, 0.1)'
  }`
}))

const Profile = () => {
  const { state } = useTypingTest()
  const { user, logout } = useAuth()

  // Format the date from the user object
  const formattedDate = user?.createdAt
    ? new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(user.createdAt))
    : 'January 2024'

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <StyledPaper elevation={3}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4
          }}
        >
          <Avatar
            sx={{
              width: 120,
              height: 120,
              mb: 2,
              bgcolor: 'primary.main',
              fontSize: '3rem',
              fontWeight: 'bold'
            }}
          >
            {(user?.name || 'U').charAt(0).toUpperCase()}
          </Avatar>

          <Typography
            variant='h4'
            component='h1'
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
            {user?.name || 'TypingMaster'}
          </Typography>

          <Typography variant='body1' color='textSecondary' gutterBottom>
            {user?.email || 'user@example.com'}
          </Typography>

          <Chip
            label={`Member since ${formattedDate}`}
            variant='outlined'
            sx={{ mt: 1, borderColor: 'primary.main', color: 'primary.main' }}
          />
        </Box>

        <Typography variant='h5' gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
          {user?.name}
        </Typography>

        <Typography variant='h5' gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
          Typing Statistics
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <StatCard elevation={0}>
              <Typography variant='h3' color='primary' gutterBottom>
                {user?.testsCompleted || 0}
              </Typography>
              <Typography variant='h6' color='textSecondary'>
                Tests Completed
              </Typography>
            </StatCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StatCard elevation={0}>
              <Typography variant='h3' color='primary' gutterBottom>
                {user?.highestWPM || 0}
              </Typography>
              <Typography variant='h6' color='textSecondary'>
                Highest WPM
              </Typography>
            </StatCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StatCard elevation={0}>
              <Typography variant='h3' color='primary' gutterBottom>
                {Math.round(user?.averageWPM) || 0}
              </Typography>
              <Typography variant='h6' color='textSecondary'>
                Average WPM
              </Typography>
            </StatCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StatCard elevation={0}>
              <Typography variant='h3' color='primary' gutterBottom>
                {Math.round(user?.totalAccuracy) || 0}%
              </Typography>
              <Typography variant='h6' color='textSecondary'>
                Accuracy
              </Typography>
            </StatCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StatCard elevation={0}>
              <Typography variant='h3' color='primary' gutterBottom>
                {(user?.totalWords || 0).toLocaleString()}
              </Typography>
              <Typography variant='h6' color='textSecondary'>
                Total Words
              </Typography>
            </StatCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StatCard elevation={0}>
              <Typography variant='h3' color='primary' gutterBottom>
                {(user?.totalCharsTyped || 0).toLocaleString()}
              </Typography>
              <Typography variant='h6' color='textSecondary'>
                Characters Typed
              </Typography>
            </StatCard>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant='outlined' color='primary'>
            Edit Profile
          </Button>
          <Button variant='contained' color='primary'>
            Start New Test
          </Button>
        </Box>
      </StyledPaper>
    </Container>
  )
}
export default Profile
