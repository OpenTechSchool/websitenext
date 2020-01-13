import Grid from '@material-ui/core/Grid'
import { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import ChapterSection from '../../components/Section/ChapterSection'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import TextSection from '../../components/Section/TextSection'

const Community: NextPage = () => {
  const { t } = useTranslation()

  return (
    <PageLayout
      siteTitle={t('community.siteTitle')}
      siteDescription={t('community.siteDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection title={t('community.formats.title')}>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <h2>{t('community.formats.workshop.title')}</h2>
            <p>{t('community.formats.workshop.description')}</p>
            <h3>{t('community.formats.who')}</h3>
            <p>{t('community.formats.workshop.who')}</p>
            <h3>{t('community.formats.when')}</h3>
            <p>{t('community.formats.workshop.when')}</p>
          </Grid>
          <Grid item xs={12} md={5}>
            <h2>{t('community.formats.coLearning.title')}</h2>
            <p>{t('community.formats.coLearning.description')}</p>
            <h3>{t('community.formats.who')}</h3>
            <p>{t('community.formats.coLearning.who')}</p>
            <h3>{t('community.formats.when')}</h3>
            <p>{t('community.formats.coLearning.when')}</p>
          </Grid>
        </Grid>
      </TextSection>

      <ChapterSection title={t('chapter.title')} />

      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Community)
