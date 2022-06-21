// import { createTheme } from '@mui/material';


import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
export const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: blue,
    },
});