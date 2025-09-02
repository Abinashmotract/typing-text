// src/pages/TypingTest.jsx
import { Container, Grid, Paper, Typography, Box, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextDisplay from '../components/TextDisplay';
import WordInput from '../components/WordInput';
import Timer from '../components/Timer';
import Button from '../components/Button';
import { useTypingLogic } from '../hooks/useTypingLogic';

// Background animation
const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, 20px) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const AnimatedBackground = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
    '&::before, &::after': {
        content: '""',
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
        animation: `${float} 15s infinite linear`,
    },
    '&::before': {
        top: '10%',
        left: '10%',
        animationDelay: '0s',
        animationDuration: '20s',
    },
    '&::after': {
        bottom: '10%',
        right: '10%',
        animationDelay: '-5s',
        animationDuration: '25s',
    },
}));

const StatCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 12,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[8],
    },
}));

const TypingTest = () => {
    const {
        text,
        userInput,
        isTyping,
        isFinished,
        wpm,
        accuracy,
        errors,
        totalChars,
        currentIndex,
        handleInputChange,
        resetTest,
    } = useTypingLogic();

    return (
        <>
            <AnimatedBackground />
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(45deg, #7c4dff, #ff4081)',
                            backgroundClip: 'text',
                            textFillColor: 'transparent',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Typing Test
                    </Typography>
                    <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
                        Test your typing speed and accuracy
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <TextDisplay text={text} userInput={userInput} currentIndex={currentIndex} />
                        <Box sx={{ mt: 3 }}>
                            <WordInput value={userInput} onChange={handleInputChange} disabled={isFinished} />
                        </Box>

                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Timer isActive={isTyping && !isFinished} />
                            <Button onClick={resetTest} variant="outlined">
                                Restart Test
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                            <StatCard elevation={3}>
                                <Typography variant="h3" color="primary" gutterBottom>
                                    {wpm}
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    Words Per Minute
                                </Typography>
                            </StatCard>

                            <StatCard elevation={3}>
                                <Typography variant="h3" color="primary" gutterBottom>
                                    {accuracy}%
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    Accuracy
                                </Typography>
                            </StatCard>

                            <StatCard elevation={3}>
                                <Typography variant="h3" color={errors > 0 ? 'error' : 'primary'} gutterBottom>
                                    {errors}
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    Errors
                                </Typography>
                            </StatCard>

                            <StatCard elevation={3}>
                                <Typography variant="h3" color="primary" gutterBottom>
                                    {totalChars}
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    Characters Typed
                                </Typography>
                            </StatCard>
                        </Box>
                    </Grid>
                </Grid>

                {isFinished && (
                    <Paper
                        elevation={3}
                        sx={{ mt: 4, p: 3, textAlign: 'center', backgroundColor: 'primary.dark', color: 'primary.contrastText', borderRadius: 3, }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Test Completed!
                        </Typography>
                        <Typography variant="body1">
                            You typed at {wpm} WPM with {accuracy}% accuracy.
                        </Typography>
                    </Paper>
                )}
            </Container>
        </>
    );
};

export default TypingTest;