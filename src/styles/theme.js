import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  shape: {
    borderRadius: 6,
  },
  breakpoints: {
    values: {
      xs: 0,
      xsm: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#9dcfd4",
    },
    error: {
      main: "#f53649",
    },
  },
});

export default theme;
