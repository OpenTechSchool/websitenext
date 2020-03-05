import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MenuIcon from '@material-ui/icons/Menu'
import useTranslation from '../../hooks/useTranslation'

import { mediaquery } from '../../style/style'

export function Header() {
  const isDesktop = useMediaQuery(`(${mediaquery.smallToTablet})`)
  const { locale, t } = useTranslation()

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
          {!isDesktop && <MenuIcon style={menuIconStyle} />}

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
            font-size: 20px;
            font-size: 2rem;
            font-weight: bold;
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
