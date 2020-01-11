import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { Link } from '@material-ui/core'
import useTranslation from '../../hooks/useTranslation'
import matter from 'gray-matter'
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

ChapterSection.getInitialProps = async context => {
  const { lang } = context.query

  const cities = (ctx => {
    // get all keys from data/cities
    const keys = ctx.keys()
    // grab the values from these files
    const values = keys.map(ctx)

    const data = keys.map((key, index) => {
      const value: any = values[index]
      const document = matter(value.default)

      return {
        document,
      }
    })

    return data
    // TODO: Make language a dynamic value
  })(require.context(`../../data/cities/en`, true, /\.md$/))

  return { cities }
}
