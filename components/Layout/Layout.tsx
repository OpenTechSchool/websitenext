import React from 'react'
import Meta from '../Meta'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout({ siteTitle, siteDescription, children }) {
  return (
    <section className='layout'>
      <Meta siteTitle={siteTitle} siteDescription={siteDescription} />
      <Header siteTitle={siteTitle} />

      <div className='main'>{children}</div>
      <Footer />
      <style jsx>{`
        .layout {
          background-color: pink;
        }
      `}</style>
    </section>
  )
}
