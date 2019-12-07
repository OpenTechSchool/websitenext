import Link from 'next/link'
import matter from 'gray-matter'
import HomepageLayout from '../../components/HomepageLayout/HomepageLayout'

export default function Index({ siteTitle, siteDescription, cities }) {
  return (
    <HomepageLayout siteTitle={siteTitle} siteDescription={siteDescription}>
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

Index.getInitialProps = async function() {
  const cities = (context => {
    // get all keys from src/data/cities
    const keys = context.keys()
    // grab the values from these files
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      const value: any = values[index]
      const document = matter(value.default)

      return {
        document,
      }
    })

    return data
  })(require.context('../../data/cities', true, /\.md$/))

  return {
    siteTitle: 'ots',
    siteDescription: 'some description',
    cities: cities,
  }
}
