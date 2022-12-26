import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = () => {
  const { currentUser, setCurrentUser, currentPage, setCurrentPage } =
    useContext(DataContext);

  const signout = () => {
    setCurrentUser("");
    setCurrentPage("home");
  };

  const Homeurl = () => {
    setCurrentPage("main");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={9}>
            Internal Home Page For Data
          </Typography>
          <Box mr={9}>
            {currentUser == "" && (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit"> Login </Button>
              </Link>
            )}
            {currentUser == "" && (
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit"> Signup </Button>
              </Link>
            )}
            {currentPage == "main" && (
              <Link
                to="/table"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit"> Api </Button>
              </Link>
            )}
            {currentPage == "table" && (
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit" onClick={() => Homeurl()}>
                  Home
                </Button>
              </Link>
            )}
            {(currentPage == "main" || currentPage == "table") && (
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit" onClick={() => signout()}>
                  Sign-out
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
