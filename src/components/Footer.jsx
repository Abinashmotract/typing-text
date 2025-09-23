import React from "react";
import { Box, Typography, Container, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: "auto",
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Visit our other product -{" "}
            <a
              href="https://convertmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none", fontWeight: "bold" }}
            >
              convertmedia.com
            </a>
            ,{" "}
            <a
              href="https://madco.com/lander"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none", fontWeight: "bold" }}
            >
              Madco.com
            </a>
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <MuiLink
              component={Link}
              to="/privacy-policy"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              to="/termsconditions"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Terms & Conditions
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
