import { useState } from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MenuIcon from '@material-ui/icons/Menu'
import useTranslation from '../../hooks/useTranslation'
import SocialMediaSection from '../Section/SocialMediaSection'

import { mediaquery } from '../../style/style'

export function Header() {
  const isDesktop = useMediaQuery(`(${mediaquery.smallToTablet})`)
  const { locale, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const menuIconStyle = {
    fontSize: 40,
  }

  return (
    <header>
      <div className='content-wrapper'>
        <Grid container justify='space-between'>
          <Link href='/'>
            <a className='logo'>{t('header.websiteTitle')}</a>
          </Link>
          {!isDesktop && (
            <span className='MenuIconMobile'>
              <MenuIcon style={menuIconStyle} onClick={() => setIsOpen(true)} />
            </span>
          )}

          {isDesktop && (
            <nav role='navigation' aria-label='main navigation'>
              <a href='https://learn.opentechschool.org/'>
                {t('header.learn')}
              </a>

              <Link href={`/[lang]/contribute`} as={`/${locale}/contribute`}>
                <a>{t('header.contribute')}</a>
              </Link>

              <Link href={`/[lang]/community`} as={`/${locale}/community`}>
                <a>{t('header.community')}</a>
              </Link>

              <Link href={`/[lang]/about`} as={`/${locale}/about`}>
                <a>{t('header.about')}</a>
              </Link>
            </nav>
          )}
        </Grid>
      </div>

      {!isDesktop && !isOpen && (
        <div className='mobileMenuWrapper'>
          <header>
            <div className='content-wrapper'>
              <Grid container justify='space-between'>
                <Link href='/'>
                  <a className='logo'>{t('header.websiteTitle')}</a>
                </Link>
                <span className='MenuIconMobile'>
                  <MenuIcon
                    style={menuIconStyle}
                    onClick={() => setIsOpen(false)}
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
            <a href='https://learn.opentechschool.org/'>{t('header.learn')}</a>

            <Link href={`/[lang]/contribute`} as={`/${locale}/contribute`}>
              <a>{t('header.contribute')}</a>
            </Link>

            <Link href={`/[lang]/community`} as={`/${locale}/community`}>
              <a>{t('header.community')}</a>
            </Link>

            <Link href={`/[lang]/about`} as={`/${locale}/about`}>
              <a>{t('header.about')}</a>
            </Link>
          </nav>

          <SocialMediaSection bgColor='ots-blue' />
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

          .logo {
            color: white;
            font-size: 22px;
            font-size: 2.2rem;
            font-weight: bold;
          }

          .MenuIconMobile :global(svg) {
            height: 0.8em;
            width: 0.8em;
          }

          nav a {
            font-size: 17px;
            font-size: 1.7rem;
            font-weight: 400;
            margin-right: 50px;
            padding-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.01em;
            color: white;
          }

          nav a:last-child {
            margin-right: 0;
          }

          nav a:hover {
            border-bottom: 2px solid white;
          }

          /* Mobile Menu */
           {
            /* .mobileMenuWrapper {
            height: 0;
            transition: height 0.2s ease-out;
          } */
          }

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
          }

          .mobile-nav a {
            display: block;
            text-align: center;
            font-size: 22px;
            font-size: 2.2rem;
            font-weight: 600;
            margin: 0;
            padding: 20px 0;
          }

          @media (${mediaquery.smallToTablet}) {
            .logo {
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

export default Header
