import React from 'react'
import PropTypes from 'prop-types'
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
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}
