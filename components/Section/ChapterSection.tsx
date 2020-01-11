import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'
import TextSection from '../../components/Section/TextSection'

export default function ChapterSection({ title }) {
  const { t } = useTranslation()

  return (
    <TextSection classname='' title={title}>
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
        h1 {
          text-align: center;
        }

        section {
          font-family: var(--primaryFont);
          font-weight: 600;
          font-size: 24px;
        }

        a {
          color: var(--pink);
          text-transform: uppercase;
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
    </TextSection>
  )
}
