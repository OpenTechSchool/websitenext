import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Button from '@material-ui/core/Button'

export default function Header({ siteTitle }) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <header>
      <Link href='/'>
        <a>
          <h1>OpenTechSchool</h1>
        </a>
      </Link>
      {!isDesktop && (
        <div className='hamburgerIcon'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      )}

      {isDesktop && (
        <nav role='navigation' aria-label='main navigation'>
          <Link href='/learn'>
            <a>Learn</a>
          </Link>

          <Link href='/contributes'>
            <a>Contribute</a>
          </Link>

          <Link href='/community'>
            <a>Community</a>
          </Link>

          <Link href='/about'>
            <a>About</a>
          </Link>

          <Link href='/donate'>
            <Button variant='contained' color='primary'>
              Donate
            </Button>
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

          .hamburgerIcon {
            width: 30px;
          }

          .line {
            height: 5px;
            width: 100%;
            border-radius: 4px;
            background-color: white;
          }

          .line:not(:last-child) {
            margin-bottom: 5px;
          }

          nav a {
            padding-right: 50px;
          }
        `}
      </style>
    </header>
  )
}
