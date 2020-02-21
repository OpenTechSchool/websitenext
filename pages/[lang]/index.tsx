import { NextPage } from 'next'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'
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
import LaptopCircle from '../../components/Svg/LaptopCircle'
import Community from '../../components/Svg/Community'
import LearnerSquid from '../../components/Svg/LearnerSquid'

export const Index: NextPage = () => {
  const { t, locale } = useTranslation()

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
            <h1>{t('homepage.otsInitiative.title')}</h1>
            <p>{t('homepage.otsInitiative.description2')}</p>
            <br />
            <br />
            <Link href={`/[lang]/about`} as={`/${locale}/about`}>
              <a>{t('homepage.otsInitiative.learnMore')}</a>
            </Link>
          </Grid>
          <Grid item xs={12} md={5}>
            <LaptopCircle />
          </Grid>
        </Grid>
      </TextSection>

      <TextSection>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={12} md={5}>
            <Community />
          </Grid>
          <Grid item xs={12} md={5}>
            <h1>{t('homepage.otsCommunity.title')}</h1>
            <p>{t('homepage.otsCommunity.description')}</p>
            <br />
            <br />
            <Link href={`/[lang]/community`} as={`/${locale}/community`}>
              <a>{t('homepage.otsCommunity.learnMore')}</a>
            </Link>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection classname='pink' title={t('homepage.waysToJoin.title')}>
        <Grid container justify='space-between' spacing={10}>
          <Grid item xs={12} md={4}>
            <LearnerSquid />
            <h3>{t('homepage.waysToJoin.learner.title')}</h3>
            <p className='ways-to-join'>
              {t('homepage.waysToJoin.learner.description')}
              <br />
              <br />
              <Button href=''>{t('homepage.waysToJoin.learner.cta')}</Button>
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='round-icon'></div>
            <h3>{t('homepage.waysToJoin.support.title')}</h3>
            <p className='ways-to-join'>
              {t('homepage.waysToJoin.support.description')}
              <br />
              <br />
              <Button href=''>{t('homepage.waysToJoin.support.cta')}</Button>
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='round-icon'></div>
            <h3>{t('homepage.waysToJoin.coach.title')}</h3>
            <p className='ways-to-join'>
              {t('homepage.waysToJoin.coach.description')}
              <br />
              <br />
              <Button href=''>{t('homepage.waysToJoin.coach.cta')}</Button>
            </p>
          </Grid>
        </Grid>
      </TextSection>

      <ChapterSection title={t('chapter.title')} />

      <TwitterFeed screenName='OpenTechSchool' />

      <ContactSection />

      <SocialMediaSection />

      <style jsx>{`
        .ways-to-join {
          text-align: center;
        }

        h3 {
          text-transform: uppercase;
          text-align: center;
          color: white;
        }

        .round-icon {
          background: var(--mainBlue);
          height: 200px;
          width: 200px;
          margin: 0 auto;
          text-align: center;
          border-radius: 200px;
        }

        .center {
          text-align: center;
        }

        h2 {
          color: var(--secondaryBlue);
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Index)
