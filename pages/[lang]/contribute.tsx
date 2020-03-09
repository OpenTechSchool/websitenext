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
        <Grid container justify='space-around'>
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
            <h2>{t('contribute.volunteering.coach.title')}</h2>
            <p>{t('contribute.volunteering.coach.description')}</p>
            <br />
            <Link
              href={`/[lang]/guides#coaching-guidelines`}
              as={`/${locale}/guides#coaching-guidelines`}
            >
              <a>{t('contribute.volunteering.coach.description2')}</a>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <h2>{t('contribute.volunteering.organize.title')}</h2>
            <p>{t('contribute.volunteering.organize.description')}</p>
            <br />
            <Link
              href={`/[lang]/guides#organize-meetup`}
              as={`/${locale}/guides#organize-meetup`}
            >
              <a>{t('contribute.volunteering.organize.description2')}</a>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <h2>{t('contribute.volunteering.openChapter.title')}</h2>
            <p>{t('contribute.volunteering.openChapter.description')}</p>
            <br />
            <Link
              href={`/[lang]/guides#start-chapter`}
              as={`/${locale}/guides#start-chapter`}
            >
              <a>{t('contribute.volunteering.openChapter.description2')}</a>
            </Link>
          </Grid>
        </Grid>
        <br />
        <br />
        <p>{t('contribute.volunteering.getInTouch')}</p>
      </TextSection>

      <TextSection title={t('contribute.sponsor.title')} anchor='sponsor'>
        <Grid container justify='space-around'>
          <Grid item xs={12} md={6}>
            <p>{t('contribute.sponsor.description')}</p>
            <br />
            <p>{t('contribute.sponsor.description2')}</p>
            <br />
            <Button href=''>{t('contribute.sponsor.membership')}</Button>{' '}
            <Button href=''>{t('contribute.sponsor.donation')}</Button>
          </Grid>
        </Grid>
      </TextSection>

      <ContactSection />

      <style jsx>{`
        .placeholder {
          background: var(--pink);
          min-height: 300px;
          width: 100%;
          margin: 40px 0;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Community)
