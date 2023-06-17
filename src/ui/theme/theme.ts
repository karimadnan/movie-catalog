import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e2124',
      light: '#424549',
    },
    secondary: {
      main: '#7289da',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#ffff',
      secondary: '#666a6f',
    },
    background: {
      default: '#282b30',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  shape: {
    borderRadius: 10,
  },
})

export default theme
