import Grid from '@material-ui/core/Grid'
import { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import ChapterSection from '../../components/Section/ChapterSection'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import TextSection from '../../components/Section/TextSection'

const Community: NextPage<any> = () => {
  const { t } = useTranslation()

  return (
    <PageLayout
      siteTitle={t('community.pageTitle')}
      siteDescription={t('community.pageDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection classname='' title={t('community.formats.title')}>
        <div className='content-wrapper'>
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
        </div>
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
