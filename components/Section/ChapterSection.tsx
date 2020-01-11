import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { Link } from '@material-ui/core'
import useTranslation from '../../hooks/useTranslation'

export default function ChapterSection() {
  const { t } = useTranslation()

  return (
    <section>
      <div className='content-wrapper'>
        <Grid fluid>
          <Row center='xs'>
            <Col>
              <span>{t('chapter.active')}</span>
            </Col>
          </Row>
          <Row between='xs'>
            <Col>
              <Link href='/'>
                <a>Berlin</a>
              </Link>
            </Col>
            <Col>
              <Link href='/'>
                <a>Bristol</a>
              </Link>
            </Col>
            <Col>
              <Link href='/'>
                <a>Bruessels</a>
              </Link>
            </Col>
            <Col>
              <Link href='/'>
                <a>Leipzig</a>
              </Link>
            </Col>
            <Col>
              <Link href='/'>
                <a>Zürich</a>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
      <style jsx>{`
        section {
          font-family: var(--primaryFont);
          font-weight: 600;
          font-size: 24px;
          text-transform: uppercase;
        }

        a {
          color: var(--pink);
        }

        a:hover {
          color: var(--mainBlue);
        }

        span {
          font-family: var(--secondaryFont);
          font-weight: 500;
          font-size: 22px;
          color: #828282;
        }
      `}</style>
    </section>
  )
}
