import PropTypes from 'prop-types'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import useTranslation from '../../../hooks/useTranslation'
import WithLocale from '../../../containers/withLocale'
import LocalSwitcher from '../../../components/LocalSwitcher/LocalSwitcher'
import CityLayout from '../../../components/CityLayout/CityLayout'
import CityHero from '../../../components/CityHero/CityHero'
import TextSection from '../../../components/Section/TextSection'
import TwitterFeed from '../../../components/TwitterFeed'
import Icon from '@material-ui/core/Icon'
import capitalize from 'lodash/capitalize'

const WrappedIcon = props => <Icon {...props} />
WrappedIcon.muiName = 'Icon'

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
                const iconString = Object.keys(social)[0]
                const link = social[iconString]
                // TODO: figured out correct icon name for social icons
                return (
                  <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={iconString}
                  >
                    <WrappedIcon
                      style={{
                        fontSize: 50,
                        color: 'var(--mainBlue)',
                      }}
                    >
                      {capitalize(iconString)}
                    </WrappedIcon>
                  </a>
                )
              })}
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='aboutImgContainer'>
              <img src={`/${frontmatter.title}_cityAbout.jpg`} />
            </div>
          </Grid>
        </Grid>
      </TextSection>
      <TextSection
        classname='default'
        title={t('city.eventsTitle')}
        icon='event'
      >
        <Grid
          container
          direction='column'
          justify='space-between'
          alignItems='center'
        >
          <h4>{t('city.suggestEvent')}</h4>
          <div>more</div>
        </Grid>
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
