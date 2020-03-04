import { NextPage } from 'next'
import Link from 'next/link'
import Grid, { GridDirection } from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import useTranslation from '../../hooks/useTranslation'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import WithLocale from '../../containers/withLocale'
import PageLayout from '../../components/PageLayout/PageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import TextSection from '../../components/Section/TextSection'
import ChapterSection from '../../components/Section/ChapterSection'
import Button from '../../components/Button/Button'
import ContactSection from '../../components/Section/ContactSection'
import SocialMediaSection from '../../components/Section/SocialMediaSection'
import TwitterFeed from '../../components/TwitterFeed'
import Masthead from '../../components/Header/Masthead'

export const Index: NextPage = () => {
  const { t, locale } = useTranslation()
  const theme = useTheme()
  const direction: GridDirection = useMediaQuery(theme.breakpoints.up('md'))
    ? 'row'
    : 'column-reverse'

  return (
    <PageLayout
      siteTitle='homepage.siteTitle'
      siteDescription='homepage.siteDescription'
    >
      <Masthead />

      <section>
        <LocalSwitcher />
      </section>

      <TextSection>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={12} md={5}>
            <div className='ots-initiative'>
              <h1>{t('homepage.otsInitiative.title')}</h1>
              <p>{t('homepage.otsInitiative.description2')}</p>
              <Link href={`/[lang]/about`} as={`/${locale}/about`}>
                <a>{t('homepage.otsInitiative.learnMore')}</a>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <img src='/illustrations/code.svg' alt='code' className='image' />
          </Grid>
        </Grid>
      </TextSection>

      <TextSection>
        <Grid
          container
          direction={direction}
          justify='space-between'
          alignItems='center'
        >
          <Grid item xs={12} md={5}>
            <img
              src='/illustrations/community.svg'
              alt='community'
              className='image'
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='ots-community'>
              <h1>{t('homepage.otsCommunity.title')}</h1>
              <p>{t('homepage.otsCommunity.description')}</p>
              <Link href={`/[lang]/community`} as={`/${locale}/community`}>
                <a>{t('homepage.otsCommunity.learnMore')}</a>
              </Link>
            </div>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection classname='grey' title={t('homepage.waysToJoin.title')}>
        <Grid
          container
          justify='space-between'
          alignItems='center'
          spacing={10}
        >
          <Grid item xs={12} md={4}>
            <div className='ways-to-join'>
              <div className='ways-to-join-img'>
                <img
                  src='/illustrations/learner.svg'
                  alt='learner'
                  className='center'
                />
              </div>
              <h3>{t('homepage.waysToJoin.learner.title')}</h3>
              <p>{t('homepage.waysToJoin.learner.description')}</p>
              <Button href=''>{t('homepage.waysToJoin.learner.cta')}</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='ways-to-join'>
              <div className='ways-to-join-img'>
                <img
                  src='/illustrations/sponsor.svg'
                  alt='sponsor'
                  className='center'
                />
              </div>
              <h3>{t('homepage.waysToJoin.support.title')}</h3>
              <p>{t('homepage.waysToJoin.support.description')}</p>
              <Button href=''>{t('homepage.waysToJoin.support.cta')}</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='ways-to-join'>
              <div className='ways-to-join-img'>
                <img
                  src='/illustrations/organizer.svg'
                  alt='organizer'
                  className='center'
                />
              </div>
              <h3>{t('homepage.waysToJoin.coach.title')}</h3>
              <p>{t('homepage.waysToJoin.coach.description')}</p>
              <Button href=''>{t('homepage.waysToJoin.coach.cta')}</Button>
            </div>
          </Grid>
        </Grid>
      </TextSection>

      <ChapterSection title={t('chapter.title')} />

      <TwitterFeed screenName='OpenTechSchool' />

      <ContactSection />

      <SocialMediaSection />

      <style jsx>{`
        h1 {
          padding-top: 0;
        }

        p {
          margin-bottom: 20px;
        }

        .image {
          width: 280px;
          margin: 0 auto;
        }

        .ways-to-join {
          text-align: center;
        }

        .ways-to-join p {
          margin-bottom: 40px;
        }

        .ways-to-join h3 {
          text-transform: uppercase;
        }

        .ways-to-join-img {
          position: relative;
          height: 250px;
        }

        .ways-to-join img.center {
          max-height: 100%;
          max-width: 100%;
          width: auto;
          height: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }

        .ots-initiative,
        .ots-community {
          margin-bottom: 30px;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Index)
