import React from 'react'
import PropTypes from 'prop-types'
import Meta from '../Meta'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import globalStyle from '../../style/style-global'
import { ThemeProvider } from '@material-ui/core/styles'
import { otsTheme } from '../../style/style'

export const Layout = ({
  siteTitle,
  siteDescription,
  noTranslation,
  children,
}) => {
  return (
    <ThemeProvider theme={otsTheme}>
      <Meta
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        noTranslation={noTranslation}
      />
      <Header />

      <div className='main'>{children}</div>
      <Footer />
      <style jsx global>
        {globalStyle}
      </style>
    </ThemeProvider>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
  noTranslation: PropTypes.bool,
}
