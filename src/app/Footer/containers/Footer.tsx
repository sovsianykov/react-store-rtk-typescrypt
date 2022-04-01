import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 50px",
    position: "fixed",
    left: 0,
    bottom: 0,
    zIndex: 10,
    background: "#1976d2",
    color: "#FFF",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1">Email me</Typography>
    </Box>
  );
};

export default Footer;
