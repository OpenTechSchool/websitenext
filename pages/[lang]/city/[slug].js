import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import fetchJsonp from 'fetch-jsonp'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import useTranslation from '../../../hooks/useTranslation'
import WithLocale from '../../../containers/withLocale'
import LocalSwitcher from '../../../components/LocalSwitcher/LocalSwitcher'
import CityLayout from '../../../components/CityLayout/CityLayout'
import CityHero from '../../../components/CityHero/CityHero'
import TextSection from '../../../components/Section/TextSection'
import TeamSection from '../../../components/Section/TeamSection'
import TwitterFeed from '../../../components/TwitterFeed'
import Events from '../../../components/Events'

const socialIconsList = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  gihutb: <GitHubIcon />,
}

const WrappedIcon = props => <Icon {...props} />
WrappedIcon.muiName = 'Icon'

export function CityTemplate({ content, data, siteTitle, siteDescription }) {
  const { t } = useTranslation()
  const markdownBody = content
  const frontmatter = data
  const cityName = `${frontmatter.title}`.toLowerCase()
  const meetupName = frontmatter.meetup_name

  const [events, setEvents] = useState({})
  const [hasEvents, setHasEvents] = useState(false)
  const [showMoreLink, setShowMoreLink] = useState(true)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      if (events.firstBatch) {
        const secondBatch = [...events.allEvents].splice(6, 10)
        if (!secondBatch.length) setShowMoreLink(false)
        setEvents({ ...events, secondBatch })
        return
      }

      try {
        setLoading(true)

        const result = await fetchJsonp(
          `https://api.meetup.com/${meetupName}/events`
        )

        if (result.ok) {
          setLoading(false)

          const json = await result.json()
          const allEvents = json.data
          if (allEvents.length) {
            const firstBatch = [...allEvents].splice(0, 6)
            setEvents({ firstBatch, allEvents })
            setHasEvents(true)
          } else {
            setHasEvents(false)
          }
        }
      } catch (err) {
        // TODO: render proper fetch error design
        setLoading(true)
        console.error('fetch error', err)
      }
    }
    fetchData()
  }, [showMoreLink])

  return (
    <CityLayout siteTitle={siteTitle} siteDescription={siteDescription}>
      <CityHero
        cityName={cityName}
        title={frontmatter.title}
        tagline={frontmatter.tagline}
        meetupName={frontmatter.meetup_name}
      />
      <section>
        <LocalSwitcher />
      </section>
      <TextSection classname='default'>
        <Grid
          container
          justify='space-between'
          alignItems='stretch'
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            <ReactMarkdown source={markdownBody} escapeHtml={false} />
            {frontmatter.socials.length !== 0 &&
              frontmatter.socials.map(social => {
                const iconName = Object.keys(social)[0]
                const link = social[iconName]
                return (
                  <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={iconName}
                    className='socialLink'
                  >
                    <WrappedIcon
                      style={{
                        color: 'var(--mainBlue)',
                        transform: `scale(1.6)`,
                      }}
                    >
                      {socialIconsList[iconName]}
                    </WrappedIcon>
                  </a>
                )
              })}
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='aboutImgContainer'>
              <img src={`/${cityName}_cityAbout.jpg`} />
            </div>
          </Grid>
        </Grid>
      </TextSection>
      <TextSection
        classname='default'
        title={t('city.eventsTitle')}
        icon='event'
      >
        <Events
          title={t('city.suggestEvent')}
          events={events}
          isLoading={isLoading}
          hasEvents={hasEvents}
          showMoreLink={showMoreLink}
          setShowMoreLink={setShowMoreLink}
        />
      </TextSection>

      <TeamSection frontmatter={frontmatter} />

      <TwitterFeed screenName={frontmatter.twitter} />

      <style jsx>{`
        :global(p) {
          margin: 2em 0;
        }

        .aboutImgContainer {
          background-color: var(--mainGrey);
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px;
        }

        h4 {
          color: var(--pink);
        }

        .socialLink {
          display: inline-block;
          width: 33px;
          height: 33px;
          margin-right: 12px;
          margin-top: 12px;
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
    content,
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
