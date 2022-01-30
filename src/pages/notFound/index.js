import React from "react";
import Typography from "@mui/material/Typography";
import "./styles.scss";

const NotFound = () => {
  return (
    <>
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        sx={{ textAlign: "center", color: "primary.main" }}
      >
        ERROR 404
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ textAlign: "center", color: "primary.main" }}
      >
        This page doesn't exist
      </Typography>
      <div className="not-found-image">
        <img src={require("../../assets/images/not-found.JPG")}></img>
      </div>
    </>
  );
};

export default NotFound;
