import { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import Grid from '@material-ui/core/Grid'
import TextSection from '../../components/Section/TextSection'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'

// import { mediaquery } from '../../style/style'

const About: NextPage = () => {
  const { t } = useTranslation()

  return (
    <PageLayout
      siteTitle='about.siteTitle'
      siteDescription={t('about.siteDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>
      <TextSection classname='default' title={t('about.history.title')}>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={12} md={5}>
            <img src='/about.jpg' />
          </Grid>
          <Grid item xs={12} md={5}>
            <p>{t('about.history.description')}</p>
            <br />
            <p>{t('about.history.description2')}</p>
          </Grid>
        </Grid>
      </TextSection>
      <TextSection classname='pink' title={t('about.explanation.title')}>
        <p>{t('about.explanation.description')}</p>
      </TextSection>
      <TextSection classname='highlight' title={t('about.coreValue.title')}>
        <p>{t('about.coreValue.description')}</p>

        <h2>{t('about.coreValue.openness.title')}</h2>
        <p>{t('about.coreValue.openness.description')}</p>

        <h2>{t('about.coreValue.empowerment.title')}</h2>
        <p>{t('about.coreValue.empowerment.description')}</p>

        <h2>{t('about.coreValue.handsOn.title')}</h2>
        <p>{t('about.coreValue.handsOn.description')}</p>

        <h2>{t('about.coreValue.welcoming.title')}</h2>
        <p>{t('about.coreValue.welcoming.description')}</p>

        <h2>{t('about.coreValue.transparency.title')}</h2>
        <p>{t('about.coreValue.transparency.description')}</p>

        <h2>{t('about.coreValue.nonProfit.title')}</h2>
        <p>{t('about.coreValue.nonProfit.description')}</p>
      </TextSection>
      <TextSection classname='grey' title='Our Licensing Policy'>
        <p>
          In correspondence with our values we release all learning materials,
          blueprints and any other kind of content under the{` `}
          <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en_US'>
            Creative Commons Attribution-ShareAlike 3.0 Unported License:
          </a>
          {` `}
          As long as you attribute the work to the OpenTechSchool (usually by
          mentioning such and providing the link to the original material) and
          share it under the same licence again, you are free to use, share,
          copy and modify it - even in a commercial context.
        </p>
      </TextSection>
      <style jsx>{``}</style>
    </PageLayout>
  )
}

export default WithLocale(About)
