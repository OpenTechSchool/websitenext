import { NextPage } from 'next'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import PageLayout from '../components/PageLayout/PageLayout'
// import LocalSwitcher from '../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../hooks/useTranslation'
import WithLocale from '../containers/withLocale'
import TextSection from '../components/Section/TextSection'
import ContactSection from '../components/Section/ContactSection'
import { useAssetPath } from '../utils/assetPath'

const Community: NextPage = () => {
  const { t, locale } = useTranslation()
  const assetPath = useAssetPath()

  return (
    <PageLayout
      pageTitle={t('contribute.pageTitle')}
      pageDescription={t('contribute.pageDescription')}
    >
      {/* <section>
        <LocalSwitcher />
      </section> */}

      <TextSection title={t('contribute.contribute.title')}>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={3}>
            <img
              src={assetPath('/illustrations/organizer.svg')}
              alt='organizer'
              className='organizer-img'
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <p>{t('contribute.contribute.description')}</p>
            <br />
            <p>{t('contribute.contribute.description2')}</p>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection
        title={t('contribute.volunteering.title')}
        classname='grey'
        anchor='volunteering'
      >
        <Grid container justify='space-around'>
          <Grid item xs={12} md={5}>
            <p className='getInTouch'>
              {t('contribute.volunteering.getInTouch')}
            </p>
          </Grid>
        </Grid>
        <Grid container justify='space-around' alignItems='center'>
          <Grid item xs={12} md={4}>
            <img
              src={assetPath('/illustrations/volunteer.svg')}
              alt='volunteer'
              className='volunteer-img'
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <h3>{t('contribute.volunteering.coach.title')}</h3>
            <p>{t('contribute.volunteering.coach.description')}</p>
            <p>
              <Link href={`/guides#coaching-guidelines`}>
                <a>{t('contribute.volunteering.coach.description2')}</a>
              </Link>
            </p>

            <h3>{t('contribute.volunteering.organize.title')}</h3>
            <p>{t('contribute.volunteering.organize.description')}</p>
            <p>
              <Link href={`/guides#organize-meetup`}>
                <a>{t('contribute.volunteering.organize.description2')}</a>
              </Link>
            </p>

            <h3>{t('contribute.volunteering.openChapter.title')}</h3>
            <p>{t('contribute.volunteering.openChapter.description')}</p>
            <p>
              <Link href={`/guides#start-chapter`}>
                <a>{t('contribute.volunteering.openChapter.description2')}</a>
              </Link>
            </p>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection title={t('contribute.supporter.title')} anchor='supporter'>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={3}>
            <img
              src={assetPath('/illustrations/sponsor.svg')}
              alt='sponsor'
              className='sponsor-img'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>{t('contribute.supporter.description')}</p>
            <p>
              {t('contribute.supporter.sponsor')}{' '}
              <a href='mailto:info@opentechschool.org'>
                {t('contribute.supporter.getInTouch')}
              </a>
              .
            </p>
            <p>
              {t('contribute.supporter.membership')}{' '}
              <Link href={`/about#membership`}>
                <a>{t('contribute.supporter.readMore')}</a>
              </Link>
              .
            </p>
          </Grid>
        </Grid>
      </TextSection>

      <ContactSection />

      <style jsx>{`
        .sponsor-img,
        .organizer-img {
          margin: 0 auto 20px auto;
        }
        .getInTouch {
          margin-bottom: 40px;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Community)
