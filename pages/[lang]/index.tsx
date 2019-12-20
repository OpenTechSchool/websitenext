import { NextPage } from 'next'
import Link from 'next/link'
import matter from 'gray-matter'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import HomepageLayout from '../../components/HomepageLayout/HomepageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'

interface IndexProps {
  cities?: Array<Object>
}

export const Index: NextPage<any, IndexProps> = ({ cities }) => {
  const { locale, t } = useTranslation()

  return (
    <HomepageLayout
      siteTitle='homepage.siteTitle'
      siteDescription='this is the OTS homepage'
    >
      <section>
        <LocalSwitcher />
      </section>
      <section>
        {t('homepage.cityListTitle')}
        {cities &&
          cities.map(({ document: { data } }) => (
            <Link
              href={{ pathname: `${locale}/city/${data.slug}` }}
              key={data.slug}
            >
              <a>
                <h2>{data.title}</h2>
              </a>
            </Link>
          ))}
      </section>
    </HomepageLayout>
  )
}

Index.getInitialProps = async context => {
  const { lang } = context.query
  console.log(lang)

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

export default WithLocale(Index)
