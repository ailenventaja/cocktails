import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import paths from "../../config/paths";
import "./style.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  var pathName = window.location.pathname;
  console.log(pathName);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOnClick = (path) => {
    if (window.location.pathname === path) window.location.reload();
    else navigate(path);
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="menu">
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              sx={{ display: { xsm: "none" } }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={() => handleOnClick(paths.INGREDIENTS)}>
                <Typography textAlign="center">Ingredients</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleOnClick(paths.CATEGORIES)}>
                <Typography textAlign="center">Categories</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleOnClick(paths.RANDOM)}>
                <Typography textAlign="center">Random</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleOnClick(paths.FAVORITES)}>
                <Typography textAlign="center">Favorites</Typography>
              </MenuItem>
            </Menu>
            <Button
              className={pathName === paths.INGREDIENTS ? "clicked" : ""}
              sx={{ my: 2, display: { xs: "none", xsm: "inline" } }}
              onClick={() => handleOnClick(paths.INGREDIENTS)}
            >
              Ingredients
            </Button>
            <Button
              className={pathName === paths.CATEGORIES ? "clicked" : ""}
              sx={{ my: 2, display: { xs: "none", xsm: "inline" } }}
              onClick={() => handleOnClick(paths.CATEGORIES)}
            >
              Categories
            </Button>
            <Button
              className={
                pathName === paths.RANDOM || pathName === "/" ? "clicked" : ""
              }
              sx={{ my: 2, display: { xs: "none", xsm: "inline" } }}
              onClick={() => handleOnClick(paths.RANDOM)}
            >
              Random
            </Button>
            <Button
              className={pathName === paths.FAVORITES ? "clicked" : ""}
              sx={{ my: 2, display: { xs: "none", sm: "inline" } }}
              onClick={() => handleOnClick(paths.FAVORITES)}
            >
              Favorites
            </Button>
            <Button
              sx={{
                my: 2,
                mt: "20px",
                display: { sm: "none", xsm: "inline", xs: "none" },
              }}
              onClick={() => handleOnClick(paths.FAVORITES)}
            >
              <FavoriteIcon sx={{ color: "primary.main" }}></FavoriteIcon>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
