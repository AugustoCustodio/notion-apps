import { createTheme } from '@mui/material/styles'

const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#2eaadc',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#e27934',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#404040',
      secondary: '#808080'
    },
    error: {
      main: '#f44336'
    },
    background: {
      default: '#ffffff'
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          fontSize: '16px'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '16px'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '16px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          lineHeight: '150%',
          fontWeight: 300
        },
        h1: {
          fontSize: '28px',
          lineHeight: '36.4px'
        },
        body1: {
          fontSize: '18px',
          fontWeight: 300,
          lineHeight: '27px'
        },
        body2: {
          fontSize: '0.875rem'
        },
        caption: {
          lineHeight: '100%'
        }
      }
    }
  },
  typography: {
    fontFamily: [
        'Noto Sans',
        'Helvetica',
        'Apple Color Emoji',
        'Arial',
        'sans-serif',
        'Segoe UI Emoji',
        'Segoe UI Symbol'
    ].join(',')
  },
  shape: {
    borderRadius: 2
  }
})

export default LightTheme
