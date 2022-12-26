import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { DataContext } from "../App";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const theme = createTheme();

export default function Signup() {
  const {
    useremail,
    setUseremail,
    userpassword,
    setUserpassword,
    userrepassword,
    setUserrepassword,
    coloruseremail,
    setColoruseremail,
    colorpassword,
    setColorpassword,
    colorrepassword,
    setColorrepassword,
    erroruseremail,
    setErroruseremail,
    errorpassword,
    setErrorpassword,
    errorrepassword,
    setErorrepassword,
    userData,
    setUserData,
  } = useContext(DataContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newdata = {
      id: uuidv4(),
      Email: useremail,
      password: userpassword,
    };

    const emailCheck = () => {
      const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

      const foundItem = userData.find((element) => {
        return element.Email == useremail;
      });

      if (foundItem === undefined) {
        setErroruseremail("Correct");
        setColoruseremail("green");
      } else if (useremail === foundItem.Email) {
        setErroruseremail("This email already use");
        setColoruseremail("red");
      }

      if (foundItem === undefined) {
        if (re.test(newdata.Email)) {
          setErroruseremail("Correct");
          setColoruseremail("green");
        } else {
          setErroruseremail(
            "Your email must be at least 8 characters including a lowercase letter, an uppercase letter, and a number"
          );
          setColoruseremail("red");
        }
      } else if (useremail === foundItem.Email) {
        setErroruseremail("This email already use");
        setColoruseremail("red");
      }

      if (re.test(newdata.password)) {
        setErrorpassword("Correct");
        setColorpassword("green");
      } else {
        setErrorpassword(
          "Your password must be at least 8 characters including a lowercase letter, an uppercase letter, and a number"
        );
        setColorpassword("red");
      }

      if (userpassword === userrepassword && { colorpassword } !== "red") {
        setErorrepassword("Correct");
        setColorrepassword("green");
      } else {
        setErorrepassword("Not correct");
        setColorrepassword("red");
      }

      if (
        [erroruseremail, errorpassword, errorrepassword].every(
          (x) => x == "Correct"
        )
      ) {
        setUserData([...userData, newdata]);
        setUseremail("");
        setUserpassword("");
        setUserrepassword("");
        setErroruseremail("");
        setErrorpassword("");
        setErorrepassword("");
        setColoruseremail("");
        setColorpassword("");
        setColorrepassword("");
        alert("Register complete");
        navigate("/login");
        setUseremail(newdata.Email);
      }
    };

    emailCheck();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e) => setUseremail(e.target.value)}
                  value={useremail}
                />
                <Typography color={coloruseremail}>{erroruseremail}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setUserpassword(e.target.value)}
                  value={userpassword}
                />
                <Typography color={colorpassword}>{errorpassword}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repassword"
                  label="Repassword"
                  type="password"
                  id="repassword"
                  onChange={(e) => setUserrepassword(e.target.value)}
                  value={userrepassword}
                />
                <Typography color={colorrepassword}>
                  {errorrepassword}
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
