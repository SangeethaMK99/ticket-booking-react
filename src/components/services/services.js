import './services.css'
import Box from '@material-ui/core/Box';

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";


const themes = createTheme({
    typography: {
      fontFamily: [
        'Chilanka',
        'cursive',
      ].join(","),
    },
  });
  
function Services() {
    return(
        <div className="services">
            <Box sx={{ maxWidth:400, marginLeft:500}}>
            <ThemeProvider theme={themes}>
        <Typography variant="h6">       
            <p>Easy booking and changes of travel</p>
            <p>Swift and secure payment gateways</p>
            <p>On-the-go accessibility</p>
            <p>Superior customer services</p>
            <p>Multi-platform compatibility</p>
            </Typography>
          </ThemeProvider>

            </Box>
        </div>
    );  
}
export default Services;

