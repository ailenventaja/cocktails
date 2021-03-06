import React from "react";
import { Box, CssBaseline, Paper } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "primary.main",
            height: "100vh",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Paper
              sx={{
                width: "90%",
                height: { xs: "95%", sm: "90%", md: "85%" },
                mb: 2,
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <NavBar />
              <Paper sx={{ mt: "26px" }} elevation={0}>
                <Outlet />
              </Paper>
            </Paper>
          </Box>
        </Box>
      </Box>
    </StyledEngineProvider>
  );
};

export default Layout;
