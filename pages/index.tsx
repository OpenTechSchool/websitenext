import { NextPage } from 'next'
import Link from 'next/link'
import Grid, { GridDirection } from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useTranslation from '../hooks/useTranslation'
import useMediaQuery from '@mui/material/useMediaQuery'
import WithLocale from '../containers/withLocale'
import PageLayout from '../components/PageLayout/PageLayout'
// import LocalSwitcher from '../components/LocalSwitcher/LocalSwitcher'
import TextSection from '../components/Section/TextSection'
import ChapterSection from '../components/Section/ChapterSection'
import Button from '../components/Button/Button'
import ContactSection from '../components/Section/ContactSection'
import SocialMediaSection from '../components/Section/SocialMediaSection'
import TwitterFeed from '../components/TwitterFeed'
import Masthead from '../components/Header/Masthead'
import { mediaquery } from '../style/style.js'
import { useAssetPath } from '../utils/assetPath'

export const Index: NextPage = () => {
  const { t } = useTranslation()
  const assetPath = useAssetPath()
  const theme = useTheme()
  const direction: GridDirection = useMediaQuery(theme.breakpoints.up('md'))
    ? 'row'
    : 'column-reverse'
  return (
    <PageLayout
      pageTitle={t('homepage.pageTitle')}
      pageDescription={t('homepage.pageDescription')}
    >
      <Masthead />
      {/* <section>
        <LocalSwitcher />
      </section> */}
      <TextSection>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item xs={12} md={5}>
            <div className='ots-initiative'>
              <h2>{t('homepage.otsInitiative.title')}</h2>
              <p>{t('homepage.otsInitiative.description')}</p>
              <Link href={`/about`}>
                {t('homepage.otsInitiative.learnMore')}
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src={assetPath('/illustrations/code.svg')}
              alt='code'
              className='image'
            />
          </Grid>
        </Grid>
      </TextSection>
      <TextSection>
        <Grid
          container
          direction={direction}
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item xs={12} md={5}>
            <img
              src={assetPath('/illustrations/community.svg')}
              alt='community'
              className='image'
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='ots-community'>
              <h2>{t('homepage.otsCommunity.title')}</h2>
              <p>{t('homepage.otsCommunity.description')}</p>
              <Link href={`/community`}>
                {t('homepage.otsCommunity.learnMore')}
              </Link>
            </div>
          </Grid>
        </Grid>
      </TextSection>
      <TextSection classname='grey' title={t('homepage.waysToJoin.title')}>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          spacing={10}
        >
          <Grid item xs={12} md={4}>
            <div className='ways-to-join'>
              <div className='ways-to-join-img'>
                <img
                  src={assetPath('/illustrations/learner.svg')}
                  alt='learner'
                  className='center'
                />
              </div>
              <h3>{t('homepage.waysToJoin.learner.title')}</h3>
              <p>{t('homepage.waysToJoin.learner.description')}</p>
              <Button>
                <Link href={`/community`} className='invert button'>

                  {t('homepage.waysToJoin.learner.cta')}

                </Link>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='ways-to-join'>
              <div className='ways-to-join-img'>
                <img
                  src={assetPath('/illustrations/sponsor.svg')}
                  alt='sponsor'
                  className='center'
                />
              </div>
              <h3>{t('homepage.waysToJoin.support.title')}</h3>
              <p>{t('homepage.waysToJoin.support.description')}</p>
              <Button>
                <Link href={`/contribute#supporter`} className='invert button'>

                  {t('homepage.waysToJoin.support.cta')}

                </Link>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='ways-to-join'>
              <div className='ways-to-join-img'>
                <img
                  src={assetPath('/illustrations/organizer.svg')}
                  alt='organizer'
                  className='center'
                />
              </div>
              <h3>{t('homepage.waysToJoin.coach.title')}</h3>
              <p>{t('homepage.waysToJoin.coach.description')}</p>
              <Button>
                <Link href={`/contribute#volunteering`} className='invert button'>

                  {t('homepage.waysToJoin.coach.cta')}

                </Link>
              </Button>
            </div>
          </Grid>
        </Grid>
      </TextSection>
      <TextSection title={t('chapter.title')} anchor='find-events'>
        <ChapterSection
          title={t('chapter.active')}
          hideInactiveChapters={true}
        />

      </TextSection>
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
          display: block;
          max-width: 400px;
          margin: 0 auto;
        }

        .ways-to-join p {
          text-align: center;
          margin-bottom: 40px;
        }

        .ways-to-join h3 {
          text-transform: uppercase;
          text-align: center;
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
          text-align: center;
        }

        @media (${mediaquery.smallToTablet}) {
          .ots-initiative,
          .ots-community {
            text-align: left;
          }
        }

        @media (${mediaquery.tabletToDesktop}) {
          .ways-to-join {
            margin: 0 0 36px 0;
            max-width: 100%;
          }
        }
      `}</style>
    </PageLayout>
  );
}

export default WithLocale(Index)
