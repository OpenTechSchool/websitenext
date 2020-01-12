import { NextPage } from 'next'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid, { GridDirection } from '@material-ui/core/Grid'
import PageLayout from '../../components/PageLayout/PageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import TextSection from '../../components/Section/TextSection'

const Community: NextPage<any> = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const direction: GridDirection = useMediaQuery(theme.breakpoints.up('md'))
    ? 'row'
    : 'column-reverse'

  console.log(direction)

  return (
    <PageLayout
      siteTitle={t('contribute.siteTitle')}
      siteDescription={t('contribute.siteDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection title={t('contribute.howToContribute.title')}>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <h2>{t('contribute.howToContribute.joinChapter')}</h2>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
        </Grid>
        <Grid container direction={direction} justify='space-between'>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
          <Grid item xs={12} md={5}>
            <h2>{t('contribute.howToContribute.openChapter')}</h2>
            <p></p>
          </Grid>
        </Grid>
      </TextSection>

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
