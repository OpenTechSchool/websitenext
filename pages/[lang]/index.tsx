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
import TwitterFeed from '../../components/TwitterFeed'

export const Index: NextPage = () => {
  const { t, locale } = useTranslation()

  return (
    <PageLayout
      siteTitle='homepage.siteTitle'
      siteDescription='homepage.siteDescription'
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <h1>{t('homepage.otsInitiative.title')}</h1>
            <p>{t('homepage.otsInitiative.description')}</p>
            <br />
            <p>{t('homepage.otsInitiative.description2')}</p>
            <br />
            <br />
            <Link href={`/${locale}/about`}>
              <a>{t('homepage.otsInitiative.learnMore')}</a>
            </Link>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
          <Grid item xs={12} md={5}>
            <h1>{t('homepage.otsCommunity.title')}</h1>
            <p>{t('homepage.otsCommunity.description')}</p>
            <br />
            <br />
            <Link href={`/${locale}/community`}>
              <a>{t('homepage.otsCommunity.learnMore')}</a>
            </Link>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection classname='grey' title={t('homepage.waysToJoin.title')}>
        <Grid container justify='space-between' spacing={10}>
          <Grid item xs={12} md={4}>
            <div className='placeholder-sm'></div>
            <h3>{t('homepage.waysToJoin.learner.title')}</h3>
            <p className='ways-to-join'>
              {t('homepage.waysToJoin.learner.description')}
              <br />
              <br />
              <Button href=''>{t('homepage.waysToJoin.learner.cta')}</Button>
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='placeholder-sm'></div>
            <h3>{t('homepage.waysToJoin.support.title')}</h3>
            <p className='ways-to-join'>
              {t('homepage.waysToJoin.support.description')}
              <br />
              <br />
              <Button href=''>{t('homepage.waysToJoin.support.cta')}</Button>
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='placeholder-sm'></div>
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

      <style jsx>{`
        .ways-to-join {
          text-align: center;
        }

        h3 {
          text-transform: uppercase;
          text-align: center;
        }

        .placeholder {
          background: var(--pink);
          min-height: 500px;
          width: 100%;
          margin: 40px 0;
        }

        .placeholder-sm {
          background: var(--pink);
          min-height: 200px;
          width: 100%;
          margin: 20px 0;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Index)
