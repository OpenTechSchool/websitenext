import { NextPage } from 'next'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import PageLayout from '../../components/PageLayout/PageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'

const Community: NextPage<any> = () => {
  const { t } = useTranslation()

  return (
    <PageLayout
      siteTitle={t('contribute.pageTitle')}
      siteDescription={t('contribute.pageDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>

      <h1>{t('contribute.howToContribute.title')}</h1>

      <div className='content-wrapper'>
        <Grid fluid>
          <Row between='sm'>
            <Col xs={12} sm={5}>
              <h2>{t('contribute.howToContribute.joinChapter')}</h2>
            </Col>
            <Col xs={12} sm={5}>
              <div className='placeholder'></div>
            </Col>
          </Row>

          <Row between='sm'>
            <Col xs={12} sm={5}>
              <div className='placeholder'></div>
            </Col>
            <Col xs={12} sm={5}>
              <h2>{t('contribute.howToContribute.openChapter')}</h2>
              <p></p>
            </Col>
          </Row>
        </Grid>
      </div>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        .placeholder {
          background: var(--pink);
          min-height: 500px;
          width: 100%;
          margin: 40px 0;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Community)
