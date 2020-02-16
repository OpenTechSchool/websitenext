import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout/Layout'

export default function CityLayout({ siteTitle, siteDescription, children }) {
  return (
    <Layout
      siteTitle={siteTitle}
      siteDescription={siteDescription}
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
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}
