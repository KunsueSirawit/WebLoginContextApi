import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () =>{
    return(
            <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
              <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Made by
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="text.secondary"
                  component="p"
                >
                    Sirawit Laoviriyakul
                </Typography>
              </Container>
            </Box>
    )
}

export default Footer