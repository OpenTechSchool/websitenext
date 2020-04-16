import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout/Layout'

export default function PageLayout({ pageTitle, pageDescription, children }) {
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <section className='page'>
        <div className='main'>{children}</div>
      </section>
    </Layout>
  )
}
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
}
