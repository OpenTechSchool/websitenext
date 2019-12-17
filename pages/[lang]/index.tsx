import { NextPage } from 'next'
import Link from 'next/link'
import matter from 'gray-matter'
import HomepageLayout from '../../components/HomepageLayout/HomepageLayout'
import withLocale from '../../containers/withLocale'

interface IndexProps {
  cities?: Array<Object>
}

export const Index: NextPage<any, IndexProps> = ({ cities }) => {
  return (
    <HomepageLayout
      siteTitle='OTS Homepage'
      siteDescription='this is the OTS homepage'
    >
      Index! Cities List:
      {cities.map(({ document: { data } }) => (
        <Link href={{ pathname: `/city/${data.slug}` }} key={data.slug}>
          <a>
            <h2>{data.title}</h2>
          </a>
        </Link>
      ))}
    </HomepageLayout>
  )
}

Index.getInitialProps = async ctx => {
  const cities = (ctx => {
    // get all keys from src/data/cities
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
  })(require.context('../../data/cities', true, /\.md$/))

  return { cities }
}

export default withLocale(Index)
