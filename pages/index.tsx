import React from 'react'
import Link from 'next/link'
import matter from 'gray-matter'
import HomepageLayout from '../components/HomepageLayout/HomepageLayout'

export default function Index({ siteTitle, siteDescription, cities }) {
  return (
    <HomepageLayout siteTitle={siteTitle} siteDescription={siteDescription}>
      Index! Cities List:
      {cities.map(({ document: { data }, slug }) => (
        <Link href={{ pathname: '/city', query: { id: slug } }} key={slug}>
          <h2>{data.title}</h2>
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
        document
      }
    })

    return data
  })(require.context('../data/cities', true, /\.md$/))

  return {
    siteTitle: 'ots',
    siteDescription: 'some description',
    cities: cities
  }
}
