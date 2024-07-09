import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    sidebar: {
      background: {
        main: '#052e2b',
      },
      color: {
        main: '#60cc65',
      },
    },
    primary: {
      main: '#29312f',
    },
    secondary: {
      main: '#60cc65',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: {
      fontSize: '0.9em',
      fontWeight: '500',
    },
    h5: {
      fontSize: '1.3em',
    },
  },
});
