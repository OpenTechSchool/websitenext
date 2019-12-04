import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import CityLayout from '../../components/CityLayout/CityLayout'

export default function CityTemplate({
  content,
  data,
  siteTitle,
  siteDescription,
}) {
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

CityTemplate.getInitialProps = async function(context) {
  const { slug } = context.query

  const content = await import(`../../data/cities/${slug}.md`)
  // gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default)

  return {
    siteTitle: slug,
    siteDescription: 'some description',
    ...data,
  }
}
