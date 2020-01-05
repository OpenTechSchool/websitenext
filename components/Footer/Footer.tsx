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

        .grid-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        h3 {
          font-weight: 800;
          font-size: 24px;
          color: white;
        }

        a {
          color: #9dd3f2;
          font-weight: 500;
        }
      `}</style>
    </footer>
  )
}
