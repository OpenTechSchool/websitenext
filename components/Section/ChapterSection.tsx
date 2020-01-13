import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'
import TextSection from './TextSection'

export default function ChapterSection({ title, cities }) {
  const { locale, t } = useTranslation()

  return (
    <TextSection title={title}>
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
  cities: PropTypes.array.isRequired,
}
