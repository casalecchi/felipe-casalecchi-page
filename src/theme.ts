import { createTheme } from '@mui/material/styles';

const palette = {
  mode: 'dark' as const,
  primary: {
    main: '#F2A900', // Subtly vibrant amber/gold for accents
    light: '#FFD966',
    dark: '#B37D00',
    contrastText: '#121212',
  },
  secondary: {
    main: '#8E8E93', // iOS inspired gray
    light: '#AEAEB2',
    dark: '#636366',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#0A0A0B', // Very deep rich black instead of pure #000
    paper: '#141415',   // Slightly elevated dark gray
  },
  text: {
    primary: '#F0F0F2',
    secondary: '#A1A1AA', // Zinc 400
  },
  divider: 'rgba(255,255,255,0.08)',
};

const theme = createTheme({
  palette,
  typography: {
    fontFamily: ['Inter', 'system-ui', 'sans-serif'].join(','),
    h1: { fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.2 },
    h3: { fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 },
    body1: { color: palette.text.secondary, lineHeight: 1.6 },
    body2: { color: palette.text.secondary, lineHeight: 1.5 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24, // softer, rounded buttons typical of modern premium
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default MUI overlay in dark mode
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          backgroundColor: '#0A0A0B',
          transition: 'background-color 0.3s ease',
        },
        '::selection': {
          backgroundColor: '#F2A900',
          color: '#121212',
        },
      },
    },
  },
});

export default theme;
