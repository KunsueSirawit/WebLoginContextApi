import pic4 from '../img/pic4.jpg'
import { useContext } from "react"
import { DataContext } from "../App"
import { Typography , Grid, Box } from '@mui/material'

const Body = () => {

    const { currentUser , setCurrentUser } = useContext(DataContext)
    
    return(
        <Grid container direction="row" alignItems="center">
            <Grid item xs={12} sm={6} >
                <Typography variant='h4' ml={32}>
                    Welcome to InsideCompany
                </Typography>
                <Typography variant='h5' ml={32} mt={2}>
                {/* { currentUser == "" && "Please Login"}
                { currentUser != "" &&  currentUser} */}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} justifyContent='center'>
                <Box component="img" src={pic4} mt={2} ml={5}/>
            </Grid>
        </Grid>
    )
}

export default Body