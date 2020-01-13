import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout/Layout'

export default function HomepageLayout({
  siteTitle,
  siteDescription,
  children,
}) {
  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <section className='homepage'>
        <div className='main'>{children}</div>
      </section>

      <style jsx>{`
        .homepage {
          background-color: white;
        }
      `}</style>
    </Layout>
  )
}

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}
