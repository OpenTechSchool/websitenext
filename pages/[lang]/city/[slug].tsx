import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import CityLayout from '../../../components/CityLayout/CityLayout'

export function CityTemplate({ content, data, siteTitle, siteDescription }) {
  const markdownBody = content
  const frontmatter = data

  return (
    <CityLayout siteTitle={siteTitle} siteDescription={siteDescription}>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </CityLayout>
  )
}

CityTemplate.getInitialProps = async ctx => {
  const { lang, slug } = ctx.query
  console.log(ctx.query)

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
