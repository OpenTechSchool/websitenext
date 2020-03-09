import { createMuiTheme } from '@material-ui/core/styles'

export const otsTheme = createMuiTheme({
  palette: {
    primary: { main: '#2d9cdb' },
    secondary: { main: '#ff3877' },
  },
})

export const mediaquery = {
  mobile: 'max-width: 550px',
  smallToTablet: 'min-width: 760px',
  tabletToDesktop: 'min-width: 990px',
  desktopToBigScreen: 'min-width: 1200px',
  bigScreenBreakpoint: '1200px',
}
