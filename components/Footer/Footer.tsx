import Link from 'next/link'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

export default function Footer() {
  return (
    <footer>
      <div className='grid-wrapper'>
        <Grid fluid>
          <Row around='sm'>
            <Col xs={12} sm={3}>
              <h3>Get involved</h3>
              <ul>
                <li>
                  <Link href=''>
                    <a>Join a meetup</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a>Organize an event</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a>Start a chapter</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a>Become a sponsor</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={3}>
              <h3>Our values</h3>
              <ul>
                <li>
                  <Link href=''>
                    <a>What drives us</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a>Chore values</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a>Coaching guidelines</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a>Code of Conduct</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={3}>
              <h3>About us</h3>
              <ul>
                <li>
                  <Link href=''>
                    <a>Learn more</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a>Press</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a>Imprint</a>
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
        <div className='note'>
          <p className='license'>
            Except{' '}
            <Link href=''>
              <a>where otherwise noted</a>
            </Link>
            , content on this site is licensed under a{' '}
            <Link href=''>
              <a>
                Creative Commons Attribution-ShareAlike 3.0 Unported License
              </a>
            </Link>
            .
          </p>
          <p className='imprint'>
            © {new Date().getFullYear()} by{' '}
            <Link href=''>
              <a>OpenTechSchool e.V.</a>
            </Link>
            <span className='spacer'>||</span>
            <Link href=''>
              <a>Contact us</a>
            </Link>
            <span className='spacer'>||</span>
            <Link href=''>
              <a>Impressum</a>
            </Link>
          </p>
        </div>
      </div>
      <style jsx>{`
        footer {
          width: 100%;
          padding: 72px 0 92px 0;
          background-color: var(--secondaryBlue);
          min-height: 100px;
          font-weight: 500;
          font-size: 20px;
          color: #9dd3f2;
        }

        h3 {
          font-weight: 800;
          font-size: 24px;
          color: white;
        }

        a {
          color: #9dd3f2;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        a:hover {
          opacity: 1;
          text-decoration-color: inherit;
        }

        .grid-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .note {
          font-size: 14px;
          padding: 0 2rem;
          margin-top: 92px;
        }

        .note a {
          color: white;
        }

        .imprint {
          text-align: center;
          font-size: 18px;
          margin-top: 32px;
        }

        .spacer {
          padding: 0 15px;
        }
      `}</style>
    </footer>
  )
}
