import { NextPage } from 'next'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import PageLayout from '../../components/PageLayout/PageLayout'
import ChapterSection from '../../components/Section/ChapterSection'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'

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

      <h1>{t('community.formats.title')}</h1>

      <div className='content-wrapper'>
        <Grid fluid>
          <Row between='sm'>
            <Col xs={12} sm={5}>
              <h2>{t('community.formats.workshop.title')}</h2>
              <p>{t('community.formats.workshop.description')}</p>
              <h3>{t('community.formats.who')}</h3>
              <p>{t('community.formats.workshop.who')}</p>
              <h3>{t('community.formats.when')}</h3>
              <p>{t('community.formats.workshop.when')}</p>
            </Col>
            <Col xs={12} sm={5}>
              <h2>{t('community.formats.coLearning.title')}</h2>
              <p>{t('community.formats.coLearning.description')}</p>
              <h3>{t('community.formats.who')}</h3>
              <p>{t('community.formats.coLearning.who')}</p>
              <h3>{t('community.formats.when')}</h3>
              <p>{t('community.formats.coLearning.when')}</p>
            </Col>
          </Row>
        </Grid>
      </div>

      <h1>Find events close to you</h1>

      <ChapterSection />

      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Community)
