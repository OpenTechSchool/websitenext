import { useState } from 'react'
import PropTypes from 'prop-types'
import Meta from '../Meta'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import globalStyle from '../../style/style-global'
import { ThemeProvider } from '@material-ui/core/styles'
import { otsTheme } from '../../style/style'

export const Layout = ({ pageTitle, pageDescription, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ThemeProvider theme={otsTheme}>
      <Meta pageTitle={pageTitle} pageDescription={pageDescription} />
      <div className={isMenuOpen ? 'bodyFixed' : ''}>
        <Header setIsMenuOpen={setIsMenuOpen} />

        <div className='main'>{children}</div>
        <Footer />
        <style jsx global>
          {globalStyle}
        </style>
        <style jsx>{`
          .bodyFixed {
            position: fixed;
          }
        `}</style>
      </div>
    </ThemeProvider>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
}
