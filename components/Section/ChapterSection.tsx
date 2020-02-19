import { Fragment } from 'react'
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
    <Fragment>
      <h4>{t('chapter.active')}</h4>

      <Grid container justify='space-around'>
        {cities &&
          cities.map(({ cityContent: { data } }, i) => {
            if (!data.is_inactive)
              return (
                <Grid item key={i}>
                  <Link
                    href={`/[lang]/city/[slug]`}
                    as={`/${locale}/city/${data.slug}`}
                  >
                    <a>{data.title}</a>
                  </Link>
                </Grid>
              )
          })}
      </Grid>

      <style jsx>{`
        a {
          color: var(--pink);
          text-transform: uppercase;
          font-family: var(--primaryFont);
          font-weight: 600;
          font-size: 20px;
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

        @media (${mediaquery.tabletToDesktop}) {
          a {
            font-size: 24px;
          }
        }
      `}</style>
    </Fragment>
  )
}
