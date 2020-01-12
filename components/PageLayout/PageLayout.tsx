import React from 'react'
import Layout from '../Layout/Layout'

export default function PageLayout({ siteTitle, siteDescription, children }) {
  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <section className='page'>
        <div className='main'>{children}</div>
      </section>
    </Layout>
  )
}
