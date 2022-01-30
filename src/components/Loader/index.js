import React from "react";
import { CircularProgress } from "@mui/material";
import "./styles.scss";

const Loader = () => {
  return <CircularProgress className="loader" size={50} />;
};

export default Loader;
