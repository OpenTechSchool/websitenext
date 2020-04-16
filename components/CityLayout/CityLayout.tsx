import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout/Layout'

export default function CityLayout({ pageTitle, pageDescription, children }) {
  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      noTranslation
    >
      <section className='cityPage'>
        <div className='main'>{children}</div>
      </section>

      <style jsx>{``}</style>
    </Layout>
  )
}

CityLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
}
