import PropTypes from 'prop-types'
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
          meetupName='opentechschool-berlin'
        />
      </TextSection>
      <TextSection
        classname='pink'
        title={`Team ${frontmatter.title}`}
        icon='assistant'
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
