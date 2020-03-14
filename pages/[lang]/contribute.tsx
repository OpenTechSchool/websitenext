import { NextPage } from 'next'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import PageLayout from '../../components/PageLayout/PageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import TextSection from '../../components/Section/TextSection'
import Button from '../../components/Button/Button'
import ContactSection from '../../components/Section/ContactSection'

const Community: NextPage = () => {
  const { t, locale } = useTranslation()

  return (
    <PageLayout
      siteTitle={t('contribute.siteTitle')}
      siteDescription={t('contribute.siteDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection title={t('contribute.contribute.title')}>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={3}>
            <img
              src='/illustrations/organizer.svg'
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

      <TextSection title={t('contribute.volunteering.title')} classname='grey'>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={3}>
            <h3>{t('contribute.volunteering.coach.title')}</h3>
            <p>{t('contribute.volunteering.coach.description')}</p>
            <p>
              <Link
                href={`/[lang]/guides#coaching-guidelines`}
                as={`/${locale}/guides#coaching-guidelines`}
              >
                <a>{t('contribute.volunteering.coach.description2')}</a>
              </Link>
            </p>
          </Grid>
          <Grid item xs={12} md={3}>
            <h3>{t('contribute.volunteering.organize.title')}</h3>
            <p>{t('contribute.volunteering.organize.description')}</p>
            <p>
              <Link
                href={`/[lang]/guides#organize-meetup`}
                as={`/${locale}/guides#organize-meetup`}
              >
                <a>{t('contribute.volunteering.organize.description2')}</a>
              </Link>
            </p>
          </Grid>
          <Grid item xs={12} md={3}>
            <h3>{t('contribute.volunteering.openChapter.title')}</h3>
            <p>{t('contribute.volunteering.openChapter.description')}</p>
            <p>
              <Link
                href={`/[lang]/guides#start-chapter`}
                as={`/${locale}/guides#start-chapter`}
              >
                <a>{t('contribute.volunteering.openChapter.description2')}</a>
              </Link>
            </p>
          </Grid>
        </Grid>
        <br />
        <br />
        <p>{t('contribute.volunteering.getInTouch')}</p>
      </TextSection>

      <TextSection title={t('contribute.sponsor.title')} anchor='sponsor'>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={3}>
            <img
              src='/illustrations/sponsor.svg'
              alt='sponsor'
              className='sponsor-img'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>{t('contribute.sponsor.description')}</p>
            <p>{t('contribute.sponsor.description2')}</p>
            <p>
              <Button href=''>{t('contribute.sponsor.membership')}</Button>{' '}
              <Button href=''>{t('contribute.sponsor.donation')}</Button>
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
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Community)
