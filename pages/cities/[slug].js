import fs from 'fs'
import path from 'path'
import process from 'process'
import PropTypes from 'prop-types'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
// import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import CityLayout from '../../components/CityLayout/CityLayout'
import CityHero from '../../components/CityHero/CityHero'
import TextSection from '../../components/Section/TextSection'
import TeamSection from '../../components/Section/TeamSection'
import { useAssetPath } from '../../utils/assetPath'

const WrappedIcon = (props) => <Icon {...props} />
WrappedIcon.muiName = 'Icon'

export function CityTemplate({ content, data }) {
  const { t } = useTranslation()
  const assetPath = useAssetPath()
  const markdownBody = content
  const frontmatter = data
  const cityName = `${frontmatter.slug}`.toLowerCase()
  const meetupName = frontmatter.meetup_name

  const socialIconsList = {
    facebook: <FacebookIcon />,
    github: <GitHubIcon />,
    instagram: <InstagramIcon />,
    discourse: { imgSrc: assetPath('/discourse_blue_icon.png') },
    matrix: { imgSrc: assetPath('/matrix_logo.png') },
  }

  return (
    <CityLayout
      pageTitle={`${frontmatter.title} chapter`}
      pageDescription={frontmatter.page_description}
    >
      <CityHero
        cityName={cityName}
        title={frontmatter.title}
        tagline={frontmatter.tagline}
        credits={frontmatter.credits}
      />
      {/* <section>
        <LocalSwitcher />
      </section> */}
      <TextSection classname='default'>
        <Grid
          container
          justifyContent='space-between'
          alignItems='stretch'
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            <div className='markdown'>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {markdownBody}
              </ReactMarkdown>
            </div>
            {frontmatter.socials &&
              frontmatter.socials.map((social) => {
                const iconName = Object.keys(social)[0]
                const link = social[iconName]
                return (
                  <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={iconName}
                    className='social-link'
                  >
                    {!socialIconsList[iconName] ? (
                      iconName.charAt(0).toUpperCase()
                    ) : socialIconsList[iconName].hasOwnProperty('imgSrc') ? (
                      <img
                        className='social-img'
                        src={socialIconsList[iconName].imgSrc}
                        alt={socialIconsList[iconName]}
                      />
                    ) : (
                      <WrappedIcon
                        style={{
                          color: 'var(--mainBlue)',
                          transform: `scale(1.6)`,
                        }}
                      >
                        {socialIconsList[iconName]}
                      </WrappedIcon>
                    )}
                  </a>
                )
              })}
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='about-img-container'>
              <img src={assetPath(`/${cityName}_cityAbout.jpg`)} />
              {frontmatter.credits && (
                <p className='credits'>Credits: {frontmatter.credits}</p>
              )}
            </div>
          </Grid>
        </Grid>
      </TextSection>
      {meetupName && (
        <TextSection
          classname='default'
          title={t('city.eventsTitle')}
          icon='event'
        >
          <p style={{ textAlign: 'center' }}>
            <a
              href={`https://www.meetup.com/${meetupName}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('city.eventsTitle')} →
            </a>
          </p>
        </TextSection>
      )}

      <TeamSection frontmatter={frontmatter} />

      <style jsx>{`
        .markdown :global(p) {
          margin-bottom: 20px;
        }

        .about-img-container {
          padding: 60px;
        }

        h4 {
          color: var(--pink);
        }

        .social-link {
          display: inline-block;
          width: 33px;
          height: 33px;
          margin-right: 12px;
          margin-top: 12px;
        }

        .social-link:hover {
          border-bottom: 0;
        }

        .social-img {
          position: relative;
          top: 10px;
        }

        .credits {
          font-size: 14px;
        }
      `}</style>
    </CityLayout>
  )
}

export async function getStaticPaths() {
  const citiesDir = path.join(process.cwd(), 'data/cities/en')
  const filenames = fs.readdirSync(citiesDir)

  const paths = filenames.map((name) => ({
    params: {
      slug: name.replace(/\.md$/, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const lang = 'en' // Since we removed multi-language support

  const content = await import(`../../data/cities/${lang}/${slug}.md`)
  // gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default)

  return {
    props: {
      content: data.content,
      data: data.data,
    },
  }
}

export default WithLocale(CityTemplate)

CityTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}
