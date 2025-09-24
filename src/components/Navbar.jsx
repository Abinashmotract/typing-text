import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { useTypingTest } from "../context/TypingTestContext";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(18, 18, 18, 0.8)"
      : "rgba(245, 245, 247, 0.8)",
  backdropFilter: "blur(10px)",
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.mode === "dark"
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.1)"
    }`,
}));

const Navbar = () => {
  const { user, logout } = useAuth();
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);

  const isAuthenticated = !!user; // true if user exists

  const navItems = [
    { label: "Practice", action: "scroll" }, ,
    { label: "Profile", path: "/profile", requiresAuth: true },
  ];

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  const handleLogout = () => {
    logout();
    handleProfileMenuClose();
    handleMobileMenuClose();
  };

  const renderNavItems = () => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {navItems.map((item) => {
        if (item.requiresAuth && !isAuthenticated) return null;

        if (item.action === "scroll") {
          return (
            <Button
              key="practice"
              variant="text"
              color="inherit"
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
              sx={{
                color: theme.palette.mode === "light" ? "black" : "white",
                border: `1px solid ${theme.palette.mode === "light" ? "black" : "white"}`,
                fontWeight: 500,
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              {item.label}
            </Button>
          );
        }

        return (
          <Button
            key={item.path}
            component={RouterLink}
            to={item.path}
            variant="text"
            color="inherit"
            sx={{
              fontWeight: location.pathname === item.path ? 700 : 400,
              background:
                location.pathname === item.path
                  ? theme.palette.mode === "dark"
                    ? "rgba(124, 77, 255, 0.2)"
                    : "rgba(124, 77, 255, 0.1)"
                  : "transparent",
              borderRadius: 2,
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </Box>
  );


  const renderAuthButtons = () => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {isAuthenticated ? (
        <>
          <IconButton
            onClick={handleProfileMenuOpen}
            sx={{
              color: "inherit",
              border: `1px solid ${theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.2)"
                }`,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {user.username?.[0].toUpperCase() || "U"}
            </Typography>
          </IconButton>
          <Menu
            anchorEl={profileMenuAnchor}
            open={Boolean(profileMenuAnchor)}
            onClose={handleProfileMenuClose}
            PaperProps={{
              sx: {
                mt: 1.5,
                minWidth: 180,
                backgroundColor: theme.palette.background.paper,
                backdropFilter: "blur(10px)",
                border: `1px solid ${theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)"
                  }`,
              },
            }}
          >
            <MenuItem
              component={RouterLink}
              to="/profile"
              onClick={handleProfileMenuClose}
            >
              Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Button
            component={RouterLink}
            to="/login"
            variant="outlined"
            color="inherit"
            size="small"
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            to="/signup"
            variant="contained"
            color="primary"
            size="small"
          >
            Sign Up
          </Button>
        </>
      )}
      <ThemeToggle />
    </Box>
  );

  const mobileMenu = (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        sx: {
          width: 240,
          backgroundColor: theme.palette.background.paper,
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Menu
        </Typography>
        <List>
          {navItems.map((item) => {
            if (item.requiresAuth && !isAuthenticated) return null;

            return (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  onClick={handleMobileMenuClose}
                  selected={location.pathname === item.path}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    "&.Mui-selected": {
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(124, 77, 255, 0.2)"
                          : "rgba(124, 77, 255, 0.1)",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {isAuthenticated ? (
            <>
              <Button
                component={RouterLink}
                to="/profile"
                variant="outlined"
                fullWidth
                onClick={handleMobileMenuClose}
              >
                Profile
              </Button>
              <Button variant="outlined" fullWidth onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={RouterLink}
                to="/login"
                variant="outlined"
                fullWidth
                onClick={handleMobileMenuClose}
              >
                Login
              </Button>
              <Button
                component={RouterLink}
                to="/signup"
                variant="contained"
                fullWidth
                onClick={handleMobileMenuClose}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Drawer>
  );

  return (
    <>
      <StyledAppBar position="static" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              mr: 4,
              background: "linear-gradient(45deg, #7c4dff, #ff4081)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              textDecoration: "none",
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            Typing Maker
          </Typography>

          {!isMobile && (
            <>
              {renderNavItems()}
              <Box sx={{ flexGrow: 1 }} />
            </>
          )}

          {!isMobile ? (
            renderAuthButtons()
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ThemeToggle />
              <IconButton
                color="inherit"
                aria-label="open menu"
                onClick={handleMobileMenuToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>
      {mobileMenu}
    </>
  );
};

export default Navbar;
