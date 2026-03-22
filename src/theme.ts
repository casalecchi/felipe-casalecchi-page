import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#A67B5B',
    light: '#D6A37D',
    dark: '#7E563E',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#B2BCA1',
    light: '#D4DCCB',
    dark: '#8D947D',
    contrastText: '#1b1b1b',
  },
  background: {
    default: '#F4EAD1',
    paper: '#FFF9EB',
  },
  text: {
    primary: '#3D3522',
    secondary: '#6A5A44',
  },
};

const theme = createTheme({
  palette,
  typography: {
    fontFamily: ['Inter', 'system-ui', 'sans-serif'].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    body1: { color: palette.text.primary },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
