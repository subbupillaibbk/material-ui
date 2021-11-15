import { createTheme } from '@mui/material/styles'

export const muiTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            border: '1px dashed red',
            color: 'red',
          },
        },
      ],
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#29cb7e',
      light: '#00da8885',
      dark: '#239e5a',
    },
    secondary: {
      main: '#00339f',
      light: '#3177e7',
      dark: '#0046c0',
    },
    white: {
      main: '#FFFFFF',
      light: '#fbfafa91',
    },
    gray: {
      main: '#E4E5E7',
      light: '#fbfafa91',
      dark: '#c7c7c7',
    },
    rose: {
      main: '#DD548B',
      light: '#ff8ab9',
      dark: '#934169',
    },
    midnight: {
      main: '#666666',
      light: '#e5e5e5',
      dark: '#757779',
    },
  },
  typography: {
    h4: {
      fontSize: 30,
    },
    h5: {
      fontSize: 25,
    },
    h6: {
      fontSize: 20,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 16,
      fontWeight: 600,
    },
  },
  spacing: 5,
  shape: {
    borderRadius: '20px',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1536,
    },
  },
})

export const commonStyledValues = {}
