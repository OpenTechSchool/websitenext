import { NextPage } from 'next'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import PageLayout from '../components/PageLayout/PageLayout'
// import LocalSwitcher from '../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../hooks/useTranslation'
import WithLocale from '../containers/withLocale'
import TextSection from '../components/Section/TextSection'
import Button from '../components/Button/Button'
import ContactSection from '../components/Section/ContactSection'
import ChapterSection from '../components/Section/ChapterSection'

const Guides: NextPage = () => {
  const { t, locale } = useTranslation()

  return (
    <PageLayout
      pageTitle={t('guides.pageTitle')}
      pageDescription={t('guides.pageDescription')}
    >
      <div className='hero'>
        <div className='content-wrapper'>
          <section>
            <Grid container justify='space-between' alignItems='flex-end'>
              <Grid item xs={12} md={5}>
                <h1>{t('guides.hero.title')}</h1>
                <p>{t('guides.hero.description')}</p>
                <p>{t('guides.hero.description2')}</p>
                <p>{t('guides.hero.jumpToIt')}</p>
                <Link href={`/guides#coaching-guidelines`}>
                  {t('guides.hero.howToCoach')}
                </Link>
                <br />
                <Link href={`/guides#organize-meetup`}>
                  {t('guides.hero.howToMeetup')}
                </Link>
                <br />
                <Link href={`/guides#start-chapter`}>
                  {t('guides.hero.howToCity')}
                </Link>

                <br />
                <Link href={`/guides#request-event`}>
                  {t('guides.hero.howToRequest')}
                </Link>
                <br />
                <br />
              </Grid>
              <Grid item xs={12} md={5}>
                <img src='/illustrations/coding.svg' width='300' alt='coding' />
              </Grid>
            </Grid>
          </section>
        </div>
      </div>
      {/* <section>
         <LocalSwitcher />
       </section> */}
      <TextSection
        title={t('guides.coaching.title')}
        anchor='coaching-guidelines'
      >
        <Grid container justify='space-around'>
          <Grid item xs={12} md={6}>
            <p>{t('guides.coaching.intro')}</p>
            <h3>{t('guides.coaching.notTeachingHeadline')}</h3>
            <p>{t('guides.coaching.notTeaching')}</p>
            <h3>{t('guides.coaching.friendlyEnvHeadline')}</h3>
            <p>{t('guides.coaching.friendlyEnv')}</p>
            <h3>{t('guides.coaching.questionsHeadline')}</h3>
            <p>{t('guides.coaching.questions')}</p>
            <h3>{t('guides.coaching.dontHeadline')}</h3>
            <p>{t('guides.coaching.dont')}</p>
            <br />
            <Button href='http://opentechschool.github.io/slides/presentations/coaching/'>
              {t('guides.coaching.fullGuide')}
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src='/illustrations/code.svg' alt='colearning' />
          </Grid>
        </Grid>
      </TextSection>
      <TextSection
        title={t('guides.organizeMeetup.title')}
        classname='grey'
        anchor='organize-meetup'
      >
        <Grid container justify='space-between'>
          <Grid item xs={12} md={6}>
            <p>{t('guides.organizeMeetup.description')}</p>
            <br />
            <p>{t('guides.organizeMeetup.description2')}</p>
            <p>
              {t('guides.organizeMeetup.agreement')}{' '}
              <Link href={`/about#core-values`}>
                <a>{t('guides.organizeMeetup.values')}</a>
              </Link>
              . {t('guides.organizeMeetup.inParticular')}
            </p>
            <ul>
              <li>{t('guides.organizeMeetup.valuesBullet')}</li>
              <li>{t('guides.organizeMeetup.valuesBullet2')}</li>
              <li>{t('guides.organizeMeetup.valuesBullet3')}</li>
              <li>{t('guides.organizeMeetup.valuesBullet4')}</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src='/colearning-berlin2.jpg'
              className='co-learning-img'
              alt='colearning'
            />
            <small>Web frontend co-learning Berlin</small>
          </Grid>
        </Grid>
      </TextSection>
      <TextSection title={t('guides.newChapter.title')} anchor='start-chapter'>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={6}>
            <p>{t('guides.newChapter.intro')}</p>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={6}>
            <h2>{t('guides.newChapter.teamingUpHeadline')}</h2>
            <p>{t('guides.newChapter.teamingUp')}</p>
            <ul>
              <li>{t('guides.newChapter.bullet1')}</li>
              <li>{t('guides.newChapter.bullet2')}</li>
              <li>{t('guides.newChapter.bullet3')}</li>
            </ul>
            <br />
            <p>{t('guides.newChapter.connect')}</p>
            <p>{t('guides.newChapter.social')}</p>
            <p>{t('guides.newChapter.previousChapters')}</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src='/colearning-berlin.jpg' alt='colearning' />
            <small>Web frontend co-learning Berlin</small>
          </Grid>
        </Grid>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={6}>
            <h2>{t('guides.newChapter.planningMeetup.title')}</h2>
            <h3>{t('guides.newChapter.planningMeetup.findOrganizers')}</h3>
            <p>{t('guides.newChapter.planningMeetup.notAlone')}</p>
            <h3>{t('guides.newChapter.planningMeetup.venue.title')}</h3>
            <p>{t('guides.newChapter.planningMeetup.venue.description')}</p>
            <h3>{t('guides.newChapter.planningMeetup.date.title')}</h3>
            <p>{t('guides.newChapter.planningMeetup.date.findDate')}</p>
            <h3>{t('guides.newChapter.planningMeetup.attendees.title')}</h3>
            <p>{t('guides.newChapter.planningMeetup.attendees.description')}</p>
            <p>
              {t('guides.newChapter.planningMeetup.attendees.description2')}
            </p>
          </Grid>
          <Grid item xs={12} md={5}>
            <h2>{t('guides.newChapter.atMeetup.title')}</h2>
            <p>{t('guides.newChapter.atMeetup.description')}</p>
            <p>{t('guides.newChapter.atMeetup.description2')}</p>
            <ul>
              <li>{t('guides.newChapter.atMeetup.bullet')}</li>
              <li>{t('guides.newChapter.atMeetup.bullet2')}</li>
              <li>{t('guides.newChapter.atMeetup.bullet3')}</li>
              <li>{t('guides.newChapter.atMeetup.bullet4')}</li>
              <li>{t('guides.newChapter.atMeetup.bullet5')}</li>
              <li>{t('guides.newChapter.atMeetup.bullet6')}</li>
            </ul>
            <br />
            {t('guides.newChapter.atMeetup.readMore')}{' '}
            <Link href={`/guides#organize-meetup`}>
              {t('guides.newChapter.atMeetup.readMore2')}
            </Link>
          </Grid>
          <Grid item xs={12}>
            <h2>{t('guides.newChapter.inactiveChapters.title')}</h2>
            <p>{t('guides.newChapter.inactiveChapters.description')}</p>
            <ChapterSection hideActiveChapters={true} />
          </Grid>
        </Grid>
      </TextSection>
      <TextSection
        title='Requesting an event'
        classname='pink'
        anchor='request-event'
      >
        <h3>Do you also offer... ?</h3>
        <p>
          Do you have an idea for a new meetup or workshop but can&apos;t
          organize it by your self?
        </p>
        <p>
          Or perhaps you really want to learn that specific technology, but
          don&apos;t see any event close to you and don&apos;t manage to
          organize an event?
        </p>
        <p>
          Join us on our general channel in slack and get in contact with us.
        </p>
      </TextSection>
      <ContactSection />
      <style jsx>{`
        h1 {
          color: white;
          text-align: left;
          font-size: 38px;
          font-size: 3.8rem;
        }

        .hero {
          position: relative;
          background-color: var(--otsColor);
          color: white;
          padding: 50px;
        }

        .hero :global(a) {
          color: white;
        }

        .co-learning-img {
          padding-top: 30px;
        }

        .content-wrapper {
          max-width: 1180px;
          margin: 0px auto;
        }

        ul {
          list-style: inherit;
          margin-left: 25px;
        }

        li {
          padding-left: 5px;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Guides)
