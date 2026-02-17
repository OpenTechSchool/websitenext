import { createTheme } from '@mui/material/styles'

const customBreakpoints = {
  xs: 0,
  sm: 760,
  md: 990,
  lg: 1200,
  xl: 1536,
}

export const otsTheme = createTheme({
  breakpoints: {
    values: customBreakpoints,
  },
  palette: {
    primary: { main: '#2d9cdb' },
    secondary: { main: '#ff3877' },
  },
})

export const mediaquery = {
  mobile: 'max-width: 550px',
  smallToTablet: `min-width: ${customBreakpoints.sm}px`,
  tabletToDesktop: `min-width: ${customBreakpoints.md}px`,
  desktopToBigScreen: `min-width: ${customBreakpoints.lg}px`,
}
