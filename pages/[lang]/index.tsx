import { NextPage } from 'next'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid, { GridDirection } from '@material-ui/core/Grid'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import HomepageLayout from '../../components/HomepageLayout/HomepageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import TextSection from '../../components/Section/TextSection'
import ChapterSection from '../../components/Section/ChapterSection'
import Button from '../../components/Button/Button'

interface IndexProps {
  cities?: Array<Object>
}

export const Index: NextPage<any, IndexProps> = ({ cities }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const direction: GridDirection = useMediaQuery(theme.breakpoints.up('md'))
    ? 'row'
    : 'column-reverse'

  return (
    <HomepageLayout
      siteTitle='homepage.siteTitle'
      siteDescription='homepage.siteDescription'
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <h1>{t('homepage.otsInitiative.title')}</h1>
            <p>{t('homepage.otsInitiative.otsInitiativeDesc')}</p>
            <br />
            <p>{t('homepage.otsInitiative.otsInitiativeDesc2')}</p>
            <br />
            <br />
            <Link href=''>
              <a>{t('homepage.otsInitiative.learnMore')}</a>
            </Link>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection classname='grey' title={t('homepage.waysToJoin.title')}>
        <Grid container justify='space-between' spacing={10}>
          <Grid item xs={12} md={4}>
            <h3>{t('homepage.waysToJoin.learner.title')}</h3>
            <p className='ways-to-join'>
              <div className='placeholder-sm'></div>
              {t('homepage.waysToJoin.learner.description')}
              <br />
              <br />
              <Button href=''>{t('homepage.waysToJoin.learner.cta')}</Button>
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <h3>{t('homepage.waysToJoin.corporate.title')}</h3>
            <p className='ways-to-join'>
              <div className='placeholder-sm'></div>
              {t('homepage.waysToJoin.corporate.description')}
              <br />
              <br />
              <Button href=''>{t('homepage.waysToJoin.corporate.cta')}</Button>
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <h3>{t('homepage.waysToJoin.coach.title')}</h3>
            <p className='ways-to-join'>
              <div className='placeholder-sm'></div>
              {t('homepage.waysToJoin.coach.description')}
              <br />
              <br />
              <Button href=''>{t('homepage.waysToJoin.coach.cta')}</Button>
            </p>
          </Grid>
        </Grid>
      </TextSection>

      <ChapterSection title={t('chapter.title')} />

      <TextSection classname='grey'>
        <Grid container direction={direction} justify='space-between'>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
          <Grid item xs={12} md={5}>
            <h1>{t('homepage.getInTouch.title')}</h1>
            <p>{t('homepage.getInTouch.description')}</p>
            <br />
            <br />
            <Grid container justify='space-between'>
              <Grid item xs={6}>
                <Button href='https://join.slack.com/t/opentechschool/shared_invite/enQtODg4MDM5MzA0OTMzLWM2ZGE2OWRkNmNmNDkyZGZjZGExMzQxYzMxMDRmOGFmMzUxMWM1YzczOWQ0M2I2MTBkODA4ZWYxYjQyNjk5NGY'>
                  {t('homepage.getInTouch.slack')}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button href='mailto:'>{t('homepage.getInTouch.email')}</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TextSection>

      <style jsx>{`
        .ways-to-join {
          text-align: center;
        }

        h3 {
          text-transform: uppercase;
          text-align: center;
        }

        .placeholder {
          background: var(--pink);
          min-height: 500px;
          width: 100%;
          margin: 40px 0;
        }

        .placeholder-sm {
          background: var(--pink);
          min-height: 100px;
          width: 100%;
          margin: 40px 0;
        }
      `}</style>
    </HomepageLayout>
  )
}

export default WithLocale(Index)
