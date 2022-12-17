import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from "react"
import { DataContext } from "../App"
import { Navigate , useNavigate , Link} from "react-router-dom"

const theme = createTheme();

export default function SignIn() {

    const   {useremail, setUseremail, userpassword, setUserpassword,
            setColoruseremail, colorpassword, setColorpassword,
            userData , setCurrentUser , setCurrentTime,
            erroruserlogin , setErroruserlogin , setCurrentPage } = useContext(DataContext)

        const navigate = useNavigate()


        const sendtoserver = (e) =>{
            e.preventDefault()

            const validate = () => {

                const foundItem = userData.find((element) => {
                        return (
                          element.Email == useremail)
                    }   
                )

                if (foundItem === undefined || useremail !== foundItem.Email){
                    setErroruserlogin('Email or password incorrect')
                    setColoruseremail('red')
                }
                
                if ( foundItem === undefined || userpassword !== foundItem.password){
                    setErroruserlogin('Email or password incorrect')
                    setColorpassword('red')
                }

                if ( useremail === foundItem.Email){
                    if (userpassword === foundItem.password){
                        setUseremail('')
                        setUserpassword('')
                        setCurrentUser(foundItem.Email)
                        alert('Login complete')
                        setCurrentPage('main')
                        navigate("/")
                        let showdate = new Date();
                        let displaytime = showdate.getDate()+"/"+(showdate.getMonth()+1)+'/'+showdate.getFullYear() +" "+ showdate.getHours()+":"+showdate.getMinutes()+":"+showdate.getSeconds();
                        setCurrentTime(displaytime)
                        setColorpassword('')
                    }
                }
            }
            validate()
        }
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={sendtoserver} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={useremail}  onChange={(e) => setUseremail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={userpassword}  onChange={(e) => setUserpassword(e.target.value)}
            />
            <Typography color={colorpassword}>
                {erroruserlogin}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to ="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </ThemeProvider>
  );
}