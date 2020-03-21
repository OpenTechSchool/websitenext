import { createMuiTheme } from '@material-ui/core/styles'

const customBreakpoints = {
  sm: 760,
  md: 990,
  lg: 1200,
}

export const otsTheme = createMuiTheme({
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
