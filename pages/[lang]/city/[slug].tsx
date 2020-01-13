import * as React from 'react'
import PropTypes from 'prop-types'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import LocalSwitcher from '../../../components/LocalSwitcher/LocalSwitcher'
import CityLayout from '../../../components/CityLayout/CityLayout'

export function CityTemplate({ content, data, siteTitle, siteDescription }) {
  const markdownBody = content
  const frontmatter = data

  return (
    <CityLayout siteTitle={siteTitle} siteDescription={siteDescription}>
      <section>
        <LocalSwitcher />
      </section>
      <article className='content-wrapper'>
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown source={markdownBody} escapeHtml={false} />
        <style jsx>{`
          :global(p) {
            margin: 2em 0;
          }

          .content-wrapper {
            max-width: 1280px;
            margin: 0 auto;
          }
        `}</style>
      </article>
    </CityLayout>
  )
}

CityTemplate.getInitialProps = async ctx => {
  const { lang, slug } = ctx.query

  const content = await import(`../../../data/cities/${lang}/${slug}.md`)
  // gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default)

  return {
    siteTitle: slug,
    siteDescription: 'some description',
    ...data,
  }
}

export default CityTemplate

CityTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}
