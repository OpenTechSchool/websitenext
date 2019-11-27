import React from 'react'
import Layout from '../Layout/Layout'

export default function CityLayout({ siteTitle, siteDescription, children }) {
  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <section className='cityPage'>
        <h1> City Page </h1>
        <div className='main'>{children}</div>
      </section>

      <style jsx>{`
        .cityPage {
          background-color: pink;
        }
      `}</style>
    </Layout>
  )
}
