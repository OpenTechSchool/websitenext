import Link from 'next/link'
import matter from 'gray-matter'
import Grid from '@material-ui/core/Grid'
import useTranslation from '../../hooks/useTranslation'
import { mediaquery } from '../../style/style'

export const cities = (ctx => {
  const keys = ctx.keys() // get all keys from data/cities/en
  const values = keys.map(ctx) // grab the content from these files

  const data = keys.map((key, index) => {
    const value = values[index]
    const cityContent = matter((value as any).default)

    return {
      cityContent,
    }
  })
  return data
})(require.context(`../../data/cities/en`, true, /\.md$/))

export default function ChapterSection() {
  const { locale, t } = useTranslation()

  return (
    <div className='chaptersWrapper'>
      <h4>{t('chapter.active')}</h4>

      <Grid container justify='space-around'>
        {cities &&
          cities.map(({ cityContent: { data } }, i) => {
            if (!data.is_inactive)
              return (
                <Grid item key={i}>
                  <div className='chapter'>
                    <Link
                      href={`/[lang]/city/[slug]`}
                      as={`/${locale}/city/${data.slug}`}
                    >
                      <a className='highlight'>{data.title}</a>
                    </Link>
                  </div>
                </Grid>
              )
          })}
      </Grid>

      <style jsx>{`
        .chaptersWrapper {
          max-width: 550px;
          margin: 0 auto;
        }

        .highlight {
          text-transform: uppercase;
          font-family: var(--primaryFont);
          font-weight: 600;
          font-size: 20px;
          display: inline-block;
        }

        .chapter {
          padding: 0 8px;
          height: 50px;
        }

        h4 {
          font-family: var(--secondaryFont);
          font-weight: 500;
          font-size: 22px;
          color: #828282;
          text-align: center;
          text-transform: uppercase;
        }

        @media (${mediaquery.mobile}) {
          .city {
            padding: 0 100px;
          }
        }

        @media (${mediaquery.tabletToDesktop}) {
          .chaptersWrapper {
            max-width: 100%;
            margin: 0;
          }

          .chapter {
            padding: 0 12px;
          }

          .highlight {
            font-size: 24px;
            display: inline;
          }
        }
      `}</style>
    </div>
  )
}
