import * as React from 'react'
import PropTypes from 'prop-types'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import { Link } from '@material-ui/core'
import useTranslation from '../../../hooks/useTranslation'
import WithLocale from '../../../containers/withLocale'
import LocalSwitcher from '../../../components/LocalSwitcher/LocalSwitcher'
import CityLayout from '../../../components/CityLayout/CityLayout'
import CityHero from '../../../components/CityHero/CityHero'
import TextSection from '../../../components/Section/TextSection'
import TwitterFeed from '../../../components/TwitterFeed'

export function CityTemplate({ content, data, siteTitle, siteDescription }) {
  const { t } = useTranslation()
  const markdownBody = content
  const frontmatter = data

  return (
    <CityLayout siteTitle={siteTitle} siteDescription={siteDescription}>
      <CityHero
        title={frontmatter.title}
        tagline={frontmatter.tagline}
        ctaLink={frontmatter.meetup_link}
        membersNumber={853}
      />
      <section>
        <LocalSwitcher />
      </section>
      <TextSection classname='default' title={t('city.aboutTitle')}>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={12} md={5}>
            <ReactMarkdown source={markdownBody} escapeHtml={false} />
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='aboutImgContainer'>
              <img src={`/${frontmatter.title}_cityAbout.jpg`} />
            </div>
          </Grid>
        </Grid>
      </TextSection>
      <TextSection
        classname='default'
        title={t('city.eventsTitle')}
        icon='calendar'
      >
        <p>Suggest one!</p>
        <div>more</div>
      </TextSection>
      <TextSection
        classname='pink'
        title={`Team ${frontmatter.title}`}
        icon='chat'
        iconDirection='center'
      >
        team people here
      </TextSection>

      <TwitterFeed screenName={frontmatter.twitter} />

      <style jsx>{`
        :global(p) {
          margin: 2em 0;
        }

        .aboutImgContainer {
          background-color: var(--mainGrey);
        }
      `}</style>
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

export default WithLocale(CityTemplate)

CityTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}
