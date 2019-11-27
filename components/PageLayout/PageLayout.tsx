import React from 'react'
import Layout from '../Layout/Layout'

export default function PageLayout({ siteTitle, siteDescription, children }) {
  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <section className='page'>
        <h1> Simple Page </h1>
        <div className='main'>{children}</div>
      </section>

      <style jsx>{`
        .page {
          background-color: pink;
        }
      `}</style>
    </Layout>
  )
}
