import Logo from "../img/logo.jpg";
import { Typography, Grid, Box } from "@mui/material";

const Body = () => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" ml={32}>
          Welcome to InsideCompany
        </Typography>
        <Typography variant="h5" ml={32} mt={2}></Typography>
      </Grid>
      <Grid item xs={12} sm={6} justifyContent="center">
        <Box component="img" src={Logo} mt={2} ml={5} />
      </Grid>
    </Grid>
  );
};

export default Body;
