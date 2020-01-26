import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'
import TextSection from './TextSection'
import matter from 'gray-matter'

export default function ChapterSection({ title }) {
  const { locale, t } = useTranslation()

  const cities = (ctx => {
    // get all keys from data/cities
    const keys = ctx.keys()
    // grab the values from these files
    const values = keys.map(ctx)

    const data = keys.map((key, index) => {
      const value = values[index]

      const valueTest = (value as any).default
      const document = matter(valueTest)
      return {
        document,
      }
    })

    return data
    // TODO: Make language a dynamic value
  })(require.context(`../../data/cities/en`, true, /\.md$/))

  return (
    <TextSection title={title} anchor='find-events'>
      <h4>{t('chapter.active')}</h4>

      <Grid container justify='space-around'>
        {cities &&
          cities.map(({ document: { data } }) => (
            <Grid item key={data.slug}>
              <Link href={{ pathname: `/${locale}/city/${data.slug}` }}>
                <a>{data.title}</a>
              </Link>
            </Grid>
          ))}
      </Grid>

      <style jsx>{`
        a {
          color: var(--pink);
          text-transform: uppercase;
          font-family: var(--primaryFont);
          font-weight: 600;
          font-size: 24px;
        }

        a:hover {
          color: var(--mainBlue);
        }

        h4 {
          font-family: var(--secondaryFont);
          font-weight: 500;
          font-size: 22px;
          color: #828282;
          text-align: center;
          text-transform: uppercase;
        }
      `}</style>
    </TextSection>
  )
}

ChapterSection.propTypes = {
  title: PropTypes.string.isRequired,
}
