import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MenuIcon from '@material-ui/icons/Menu'
import useTranslation from '../../hooks/useTranslation'

import { mediaquery } from '../../style/style'

export function Header() {
  const isDesktop = useMediaQuery(`(${mediaquery.smallToTablet})`)
  const { locale } = useTranslation()

  return (
    <header>
      <Link href='/'>
        <a className='logo'>OpenTechSchool</a>
      </Link>
      {!isDesktop && <MenuIcon />}

      {isDesktop && (
        <nav role='navigation' aria-label='main navigation'>
          <a href='https://learn.opentechschool.org/'>Learn</a>

          <Link href={`/[lang]/contribute`} as={`/${locale}/contribute`}>
            <a>Contribute</a>
          </Link>

          <Link href={`/[lang]/community`} as={`/${locale}/community`}>
            <a>Community</a>
          </Link>

          <Link href={`/[lang]/about`} as={`/${locale}/about`}>
            <a>About</a>
          </Link>
        </nav>
      )}

      <style jsx>
        {`
          header {
            padding: 16px 20px;
            color: white;
            background: var(--otsColor);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            color: white;
            font-size: 15px;
            font-size: 1.5rem;
            font-weight: bold;
          }

          nav a {
            font-size: 18px;
            font-size: 1.8rem;
            font-weight: 400;
            padding-right: 50px;
            color: white;
          }

          @media (${mediaquery.tabletToDesktop}) {
            .logo {
              font-size: 30px;
              font-size: 3rem;
            }
          }
        `}
      </style>
    </header>
  )
}

export default Header
