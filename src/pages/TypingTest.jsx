// src/pages/TypingTest.jsx
import {useState, useEffect} from "react";
import {Container, Grid, Paper, Typography, Box, keyframes, AppBar, Toolbar, Alert} from "@mui/material";
import {styled} from "@mui/material/styles";
import TextDisplay from "../components/TextDisplay";
import WordInput from "../components/WordInput";
import Timer from "../components/Timer";
import Button from "../components/Button";
import ThemeToggle from "../components/ThemeToggle";
import {useTypingLogic} from "../hooks/useTypingLogic";
import {useTypingTest} from "../context/TypingTestContext";
import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import api from "../services/api";

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  33% { transform: translate(30px, 50px) rotate(120deg) scale(1.1); }
  66% { transform: translate(-20px, 20px) rotate(240deg) scale(0.9); }
  100% { transform: translate(0, 0) rotate(360deg) scale(1); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedBackground = styled(Box)(({theme}) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    overflow: "hidden",
    background:
        theme.palette.mode === "dark"
            ? `linear-gradient(-45deg, #121212, #1a1a2e, #16213e, #0f3460)`
            : `linear-gradient(-45deg, #f5f5f7, #e8eaf6, #e3f2fd, #f3e5f5)`,
    backgroundSize: "400% 400%",
    animation: `${gradient} 15s ease infinite`,

    "&::before, &::after, & .shape": {
        content: '""',
        position: "absolute",
        borderRadius: "50%",
        background:
            theme.palette.mode === "dark"
                ? "radial-gradient(circle, rgba(124, 77, 255, 0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(124, 77, 255, 0.2) 0%, transparent 70%)",
        animation: `${float} 15s infinite linear`,
        filter: theme.palette.mode === "dark" ? "blur(15px)" : "blur(10px)",
    },

    "&::before": {
        top: "10%",
        left: "10%",
        width: "30vmin",
        height: "30vmin",
        animationDelay: "0s",
        animationDuration: "20s",
    },

    "&::after": {
        bottom: "15%",
        right: "10%",
        width: "25vmin",
        height: "25vmin",
        animationDelay: "-5s",
        animationDuration: "25s",
    },

    "& .shape:nth-of-type(1)": {
        top: "70%",
        left: "20%",
        width: "20vmin",
        height: "20vmin",
        animationDelay: "-10s",
        animationDuration: "30s",
        background:
            theme.palette.mode === "dark"
                ? "radial-gradient(circle, rgba(255, 64, 129, 0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(255, 64, 129, 0.2) 0%, transparent 70%)",
    },

    "& .shape:nth-of-type(2)": {
        top: "20%",
        right: "20%",
        width: "15vmin",
        height: "15vmin",
        animationDelay: "-15s",
        animationDuration: "18s",
        background:
            theme.palette.mode === "dark"
                ? "radial-gradient(circle, rgba(76, 175, 80, 0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(76, 175, 80, 0.2) 0%, transparent 70%)",
    },
}));

const FloatingParticle = styled(Box)(({theme, delay, size, left, top}) => ({
    position: "absolute",
    width: size,
    height: size,
    left: left,
    top: top,
    borderRadius: "50%",
    background:
        theme.palette.mode === "dark"
            ? `radial-gradient(circle, ${theme.palette.primary.light}20 0%, transparent 70%)`
            : `radial-gradient(circle, ${theme.palette.primary.light}15 0%, transparent 70%)`,
    animation: `${float} 20s infinite ease-in-out`,
    animationDelay: `${delay}s`,
    opacity: theme.palette.mode === "dark" ? 0.6 : 0.4,
    filter: "blur(2px)",
}));

const StatCard = styled(Paper)(({theme}) => ({
    padding: theme.spacing(2.5),
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    backdropFilter: "blur(10px)",
    borderRadius: 16,
    transition: "transform 0.3s, box-shadow 0.3s",
    animation: `${pulse} 3s infinite ease-in-out`,
    border: `1px solid ${
        theme.palette.mode === "dark" ? theme.palette.primary.dark + "30" : theme.palette.primary.light + "50"
    }`,
    boxShadow:
        theme.palette.mode === "dark"
            ? `0 8px 32px 0 ${theme.palette.primary.dark}20`
            : `0 8px 32px 0 ${theme.palette.primary.light}15`,

    "&:hover": {
        transform: "translateY(-8px)",
        boxShadow:
            theme.palette.mode === "dark"
                ? `0 12px 40px 0 ${theme.palette.primary.dark}40`
                : `0 12px 40px 0 ${theme.palette.primary.light}30`,
    },
}));

const Title = styled(Typography)(({theme}) => ({
    background: "linear-gradient(45deg, #7c4dff, #ff4081, #7c4dff)",
    backgroundSize: "200% auto",
    backgroundClip: "text",
    textFillColor: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `${gradient} 3s linear infinite`,
    filter: `drop-shadow(0 0 8px ${
        theme.palette.mode === "dark" ? "rgba(124, 77, 255, 0.5)" : "rgba(124, 77, 255, 0.3)"
    })`,
    fontWeight: 800,
    letterSpacing: "2px",
}));

const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "rgba(18, 18, 18, 0.8)" : "rgba(245, 245, 247, 0.8)",
    backdropFilter: "blur(10px)",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
}));

const TypingTest = () => {
    const [testDuration, setTestDuration] = useState(0);
    const [stats, setStats] = useState(null);
    const [saveStatus, setSaveStatus] = useState({success: null, message: ""});
    const {state} = useTypingTest();
    const themeMode = state.theme;
    const {user} = useAuth();

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

    const particles = Array.from({length: 15}).map((_, i) => (
        <FloatingParticle
            key={i}
            delay={i * -1.5}
            size={Math.random() * 20 + 5}
            left={`${Math.random() * 100}%`}
            top={`${Math.random() * 100}%`}
        />
    ));

    const handleTimeUpdate = (time) => {
        setTestDuration(time);
    };

    // Add paste prevention
    const handlePaste = (e) => {
        e.preventDefault();
        setSaveStatus({success: false, message: "Copy-paste is not allowed in typing tests!"});
    };

    // Add copy prevention
    const handleCopy = (e) => {
        e.preventDefault();
        setSaveStatus({success: false, message: "Copying text is not allowed!"});
    };

    // Add cut prevention
    const handleCut = (e) => {
        e.preventDefault();
        setSaveStatus({success: false, message: "Cutting text is not allowed!"});
    };

    useEffect(() => {
        const saveTestResults = async () => {
            if (isFinished && user) {
                try {
                    const response = await api.post("/typing-test/save-result", {
                        wpm,
                        accuracy,
                        errors,
                        totalChars, // This is correct
                        duration: testDuration,
                    });
                    setStats(response.data.stats);
                    setSaveStatus({success: true, message: response.data.message});
                } catch (error) {
                    console.error("Failed to save test results:", error);
                }
            }
        };
        saveTestResults();
    }, [isFinished, user, wpm, accuracy, errors, totalChars, testDuration]);

    return (
        <>
            <AnimatedBackground>
                {particles}
                <div className="shape" />
                <div className="shape" />
            </AnimatedBackground>

            <Container maxWidth="lg" sx={{py: 4}}>
                <Box sx={{textAlign: "center", mb: 4}}>
                    <Title variant="h2" component="h1" gutterBottom>
                        Typing Master
                    </Title>
                    <Typography
                        variant="h6"
                        color="textSecondary"
                        sx={{
                            mb: 3,
                            textShadow: (theme) =>
                                theme.palette.mode === "dark"
                                    ? "0 0 10px rgba(124, 77, 255, 0.5)"
                                    : "0 0 5px rgba(124, 77, 255, 0.3)",
                        }}
                    >
                        Test your typing speed with style
                    </Typography>
                </Box>

                <Grid container spacing={4} mb={4}>
                    <Grid item xs={12} md={8}>
                        <TextDisplay text={text} userInput={userInput} currentIndex={currentIndex} />

                        <Box sx={{mt: 3, position: "relative"}}>
                            <WordInput value={userInput} onChange={handleInputChange} disabled={isFinished} onPaste={handlePaste} onCopy={handleCopy} onCut={handleCut} />
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: "2px",
                                    background: "linear-gradient(90deg, #7c4dff, #ff4081)",
                                    transform: "scaleX(0)",
                                    transformOrigin: "left",
                                    transition: "transform 0.3s",
                                    ...(isTyping && {
                                        transform: "scaleX(1)",
                                        animation: `${pulse} 2s infinite`,
                                    }),
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                mt: 3,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                background: (theme) =>
                                    theme.palette.mode === "dark"
                                        ? "rgba(30, 30, 30, 0.5)"
                                        : "rgba(255, 255, 255, 0.5)",
                                borderRadius: 3,
                                p: 2,
                                backdropFilter: "blur(10px)",
                                border: (theme) =>
                                    theme.palette.mode === "dark"
                                        ? "1px solid rgba(124, 77, 255, 0.2)"
                                        : "1px solid rgba(124, 77, 255, 0.1)",
                            }}
                        >
                            <Timer isActive={isTyping && !isFinished} onTimeUpdate={handleTimeUpdate} />
                            <Button
                                onClick={resetTest}
                                variant="outlined"
                                sx={{
                                    background:
                                        "linear-gradient(45deg, rgba(124, 77, 255, 0.1), rgba(255, 64, 129, 0.1))",
                                    border: "1px solid",
                                    borderImage: "linear-gradient(45deg, #7c4dff, #ff4081) 1",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(45deg, rgba(124, 77, 255, 0.2), rgba(255, 64, 129, 0.2))",
                                        boxShadow: (theme) =>
                                            theme.palette.mode === "dark"
                                                ? "0 0 15px rgba(124, 77, 255, 0.5)"
                                                : "0 0 10px rgba(124, 77, 255, 0.3)",
                                    },
                                }}
                            >
                                Restart Test
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: 2.5,
                            }}
                        >
                            <StatCard elevation={3}>
                                <Typography
                                    variant="h3"
                                    color="primary"
                                    gutterBottom
                                    sx={{
                                        textShadow: (theme) =>
                                            theme.palette.mode === "dark"
                                                ? "0 0 10px rgba(124, 77, 255, 0.5)"
                                                : "0 0 5px rgba(124, 77, 255, 0.3)",
                                    }}
                                >
                                    {wpm}
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    Words Per Minute
                                </Typography>
                            </StatCard>

                            <StatCard elevation={3}>
                                <Typography
                                    variant="h3"
                                    color="primary"
                                    gutterBottom
                                    sx={{
                                        textShadow: (theme) =>
                                            theme.palette.mode === "dark"
                                                ? "0 0 10px rgba(124, 77, 255, 0.5)"
                                                : "0 0 5px rgba(124, 77, 255, 0.3)",
                                    }}
                                >
                                    {accuracy}%
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    Accuracy
                                </Typography>
                            </StatCard>

                            <StatCard elevation={3}>
                                <Typography
                                    variant="h3"
                                    color={errors > 0 ? "error" : "primary"}
                                    gutterBottom
                                    sx={{
                                        textShadow:
                                            errors > 0
                                                ? (theme) =>
                                                      theme.palette.mode === "dark"
                                                          ? "0 0 10px rgba(244, 67, 54, 0.5)"
                                                          : "0 0 5px rgba(244, 67, 54, 0.3)"
                                                : (theme) =>
                                                      theme.palette.mode === "dark"
                                                          ? "0 0 10px rgba(124, 77, 255, 0.5)"
                                                          : "0 0 5px rgba(124, 77, 255, 0.3)",
                                    }}
                                >
                                    {errors}
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    Errors
                                </Typography>
                            </StatCard>
                            <StatCard elevation={3}>
                                <Typography
                                    variant="h3"
                                    color="primary"
                                    gutterBottom
                                    sx={{
                                        textShadow: (theme) =>
                                            theme.palette.mode === "dark"
                                                ? "0 0 10px rgba(124, 77, 255, 0.5)"
                                                : "0 0 5px rgba(124, 77, 255, 0.3)",
                                    }}
                                >
                                    {totalChars}
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    Characters Typed
                                </Typography>
                            </StatCard>
                        </Box>
                    </Grid>
                </Grid>

                {stats && (
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            background: "linear-gradient(45deg, rgba(124, 77, 255, 0.1), rgba(255, 64, 129, 0.1))",
                            backdropFilter: "blur(10px)",
                            borderRadius: 3,
                            border: (theme) =>
                                theme.palette.mode === "dark"
                                    ? "1px solid rgba(124, 77, 255, 0.3)"
                                    : "1px solid rgba(124, 77, 255, 0.2)",
                        }}
                    >
                        <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>
                            Overall Statistics
                        </Typography>

                        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2}}>
                            <Box>
                                <Typography variant="body2" color="textSecondary">
                                    Tests Completed
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {stats.testsCompleted}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="body2" color="textSecondary">
                                    Highest WPM
                                </Typography>
                                <Typography variant="h6" fontWeight="bold" color="primary">
                                    {Math.round(stats.highestWPM)}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="body2" color="textSecondary">
                                    Average WPM
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {Math.round(stats.averageWPM)}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="body2" color="textSecondary">
                                    Total Accuracy
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {Math.round(stats.totalAccuracy)}%
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="body2" color="textSecondary">
                                    Total Words
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {stats.totalWords}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="body2" color="textSecondary">
                                    Total Errors
                                </Typography>
                                <Typography variant="h6" fontWeight="bold" color="error">
                                    {stats.totalErrors}
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                )}

                {/* Save Status Alert */}
                {saveStatus.message && (
                    <Alert
                        severity={saveStatus.success ? "success" : "error"}
                        sx={{mt: 2}}
                        onClose={() => setSaveStatus({success: null, message: ""})}
                    >
                        {saveStatus.message}
                    </Alert>
                )}
            </Container>
        </>
    );
};
export default TypingTest;
