import { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import useTranslation from '../../hooks/useTranslation'

import { mediaquery } from '../../style/style'

export function Header({ setIsMenuOpen }) {
  const isDesktop = useMediaQuery(`(${mediaquery.smallToTablet})`)
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const menuIconStyle = {
    fontSize: 40,
  }

  return (
    <header>
      <div className='content-wrapper'>
        <Grid container justifyContent='space-between'>
          <Link href='/' className='logo'>
            {t('header.websiteTitle')}
          </Link>
          {!isDesktop && (
            <span className='MenuIconMobile'>
              <MenuIcon
                style={menuIconStyle}
                onClick={() => {
                  setIsOpen(true)
                  setIsMenuOpen(true)
                }}
              />
            </span>
          )}

          {isDesktop && (
            <nav role='navigation' aria-label='main navigation'>
              <a href='https://learn.opentechschool.org/' className='invert'>
                {t('header.learn')}
              </a>

              <Link href='/contribute' className='invert'>
                {t('header.contribute')}
              </Link>

              <Link href='/community' className='invert'>
                {t('header.community')}
              </Link>

              <Link href='/about' className='invert'>
                {t('header.about')}
              </Link>
            </nav>
          )}
        </Grid>
      </div>

      {!isDesktop && isOpen && (
        <div className='mobileMenuWrapper open'>
          <header>
            <div className='content-wrapper'>
              <Grid container justifyContent='space-between'>
                <Link href='/' className='logo'>
                  {t('header.websiteTitle')}
                </Link>
                <span className='MenuIconMobile'>
                  <CloseIcon
                    style={menuIconStyle}
                    onClick={() => {
                      setIsOpen(false)
                      setIsMenuOpen(false)
                    }}
                  />
                </span>
              </Grid>
            </div>
          </header>
          <nav
            className='mobile-nav'
            role='navigation'
            aria-label='main navigation'
          >
            <a href='https://learn.opentechschool.org/' className='invert'>
              {t('header.learn')}
            </a>

            <Link href='/contribute' className='invert'>
              {t('header.contribute')}
            </Link>

            <Link href='/community' className='invert'>
              {t('header.community')}
            </Link>

            <Link href='/about' className='invert'>
              {t('header.about')}
            </Link>
          </nav>
        </div>
      )}

      <style jsx>
        {`
          .content-wrapper {
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 25px;
          }

          header {
            padding: 16px 0;
            color: white;
            background: var(--otsColor);
          }

          :global(.logo) {
            color: white;
            font-size: 22px;
            font-size: 2.2rem;
            font-weight: bold;
          }

          .MenuIconMobile {
            cursor: pointer;
          }

          .MenuIconMobile :global(svg) {
            height: 0.8em;
            width: 0.8em;
          }

          nav :global(a) {
            font-size: 17px;
            font-size: 1.7rem;
            font-weight: 400;
            margin-right: 50px;
            padding-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.01em;
          }

          nav :global(a:last-child) {
            margin-right: 0;
          }

          /* Mobile Menu */
          .mobileMenuWrapper {
            position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
            background: var(--mainBlue);
            z-index: 9;
          }

          .mobile-nav {
            margin: 30px 0;
            height: calc(
              100% - 60px - 72px
            ); /* 60px are the margins + 72px the header height */
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          }

          .mobile-nav :global(a) {
            display: block;
            text-align: center;
            font-size: 22px;
            font-size: 2.2rem;
            font-weight: 600;
            margin: 0;
            padding: 20px 0;
          }

          .mobile-nav :global(a:hover) {
            border-bottom: 0px;
          }

          .socialSection {
            position: absolute;
            bottom: 0;
            width: 100%;
          }

          @media (${mediaquery.smallToTablet}) {
            :global(.logo) {
              font-size: 20px;
              font-size: 2rem;
            }
          }

          @media (${mediaquery.desktopToBigScreen}) {
            .content-wrapper {
              padding: 0;
            }
          }
        `}
      </style>
    </header>
  )
}

Header.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
}

export default Header
