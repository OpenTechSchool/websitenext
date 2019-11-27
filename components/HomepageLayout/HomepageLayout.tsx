import React from 'react'
import Layout from '../Layout/Layout'

export default function HomepageLayout({
  siteTitle,
  siteDescription,
  children
}) {
  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <section className='homepage'>
        <h1> HOME PAGE! </h1>
        <div className='main'>{children}</div>
      </section>

      <style jsx>{`
        .homepage {
          background-color: pink;
        }
      `}</style>
    </Layout>
  )
}
