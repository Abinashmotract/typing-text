// src/pages/Profile.jsx
import {Container, Paper, Box, Typography, Avatar, Grid, Chip} from "@mui/material";
import {styled} from "@mui/material/styles";
import Button from "../components/Button";
import {useTypingTest} from "../context/TypingTestContext";
import {useAuth} from "../context/AuthContext";
import { Link } from "react-router-dom";

const StyledPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    backdropFilter: "blur(10px)",
    borderRadius: 16,
    border: `1px solid ${theme.palette.mode === "dark" ? "rgba(124, 77, 255, 0.2)" : "rgba(124, 77, 255, 0.1)"}`,
}));

const StatCard = styled(Paper)(({theme}) => ({
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.mode === "dark" ? "rgba(30, 30, 30, 0.5)" : "rgba(255, 255, 255, 0.5)",
    borderRadius: 16,
    border: `1px solid ${theme.palette.mode === "dark" ? "rgba(124, 77, 255, 0.2)" : "rgba(124, 77, 255, 0.1)"}`,
}));

const Profile = () => {
    const {state} = useTypingTest();
    const {user, logout} = useAuth();
    console.log(user?.testHistory, "userd");

    const formattedDate = user?.createdAt
        ? new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
          }).format(new Date(user.createdAt))
        : "January 2024";

    const formatTestDate = (dateString) => {
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(dateString));
    };

    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            <StyledPaper elevation={3}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mb: 4,
                    }}
                >
                    <Avatar
                        sx={{
                            width: 120,
                            height: 120,
                            mb: 2,
                            bgcolor: "primary.main",
                            fontSize: "3rem",
                            fontWeight: "bold",
                        }}
                    >
                        {(user?.name || "U").charAt(0).toUpperCase()}
                    </Avatar>

                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            background: "linear-gradient(45deg, #7c4dff, #ff4081)",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {user?.name || "TypingMaster"}
                    </Typography>

                    <Typography variant="body1" color="textSecondary" gutterBottom>
                        {user?.email || "user@example.com"}
                    </Typography>

                    <Chip
                        label={`Member since ${formattedDate}`}
                        variant="outlined"
                        sx={{mt: 1, borderColor: "primary.main", color: "primary.main"}}
                    />
                </Box>

                <Typography variant="h5" gutterBottom sx={{mb: 3, fontWeight: 600}}>
                    {user?.name}
                </Typography>

                <Typography variant="h5" gutterBottom sx={{mb: 3, fontWeight: 600}}>
                    Typing Statistics
                </Typography>

                <Grid container spacing={3} sx={{mb: 4}}>
                    <Grid item xs={12} sm={6} md={4}>
                        <StatCard elevation={0}>
                            <Typography variant="h3" color="primary" gutterBottom>
                                {user?.testsCompleted || 0}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Tests Completed
                            </Typography>
                        </StatCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <StatCard elevation={0}>
                            <Typography variant="h3" color="primary" gutterBottom>
                                {user?.highestWPM || 0}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Highest WPM
                            </Typography>
                        </StatCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <StatCard elevation={0}>
                            <Typography variant="h3" color="primary" gutterBottom>
                                {Math.round(user?.averageWPM) || 0}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Average WPM
                            </Typography>
                        </StatCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <StatCard elevation={0}>
                            <Typography variant="h3" color="primary" gutterBottom>
                                {Math.round(user?.totalAccuracy) || 0}%
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Accuracy
                            </Typography>
                        </StatCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <StatCard elevation={0}>
                            <Typography variant="h3" color="primary" gutterBottom>
                                {(user?.totalWords || 0).toLocaleString()}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Total Words
                            </Typography>
                        </StatCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <StatCard elevation={0}>
                            <Typography variant="h3" color="primary" gutterBottom>
                                {(user?.totalCharsTyped || 0).toLocaleString()}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                Characters Typed
                            </Typography>
                        </StatCard>
                    </Grid>
                </Grid>

                {/* Test History Section */}
                {user?.testHistory && user.testHistory.length > 0 && (
                    <Box sx={{mb: 4}}>
                        <Typography variant="h5" gutterBottom sx={{mb: 3, fontWeight: 600}}>
                            Test History
                        </Typography>

                        <Paper elevation={2} sx={{p: 2, maxHeight: 400, overflow: "auto"}}>
                            <Grid container spacing={2}>
                                {user.testHistory.map((test, index) => (
                                    <Grid item xs={12} key={test._id || index}>
                                        <Paper
                                            elevation={1}
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                background:
                                                    test.wpm > 0
                                                        ? "rgba(124, 77, 255, 0.05)"
                                                        : "rgba(255, 64, 129, 0.05)",
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="body2" color="textSecondary">
                                                    {test.testDate ? formatTestDate(test.testDate) : "Recent test"}
                                                </Typography>
                                                <Typography variant="body2">Duration: {test.duration}s</Typography>
                                            </Box>

                                            <Box sx={{textAlign: "right"}}>
                                                <Typography
                                                    variant="h6"
                                                    color={test.wpm > 0 ? "primary.main" : "text.secondary"}
                                                >
                                                    {test.wpm} WPM
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color={
                                                        test.accuracy >= 90
                                                            ? "success.main"
                                                            : test.accuracy >= 70
                                                            ? "warning.main"
                                                            : "error.main"
                                                    }
                                                >
                                                    {test.accuracy}% Accuracy
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {test.errors} Errors
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Box>
                )}

                <Box sx={{display: "flex", gap: 2, justifyContent: "center"}}>
                    <Link to="/">
                        <Button variant="contained" color="primary">
                            Start New Test
                        </Button>
                    </Link>
                </Box>
            </StyledPaper>
        </Container>
    );
};
export default Profile;
