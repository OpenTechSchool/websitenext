import Grid, { GridDirection } from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Button from '../../components/Button/Button'
import useTranslation from '../../hooks/useTranslation'
import TextSection from './TextSection'

export default function ContactSection() {
  const { t } = useTranslation()
  const theme = useTheme()
  const direction: GridDirection = useMediaQuery(theme.breakpoints.up('md'))
    ? 'row'
    : 'column-reverse'

  return (
    <TextSection classname='grey'>
      <Grid container direction={direction} justify='space-between'>
        <Grid item xs={12} md={5}>
          <div className='placeholder'></div>
        </Grid>
        <Grid item xs={12} md={5}>
          <h1>{t('homepage.getInTouch.title')}</h1>
          <p>{t('homepage.getInTouch.description')}</p>
          <p>{t('homepage.getInTouch.description2')}</p>
          <br />
          <p>{t('homepage.getInTouch.description3')}</p>
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
      <style jsx>{`
        .placeholder {
          background: var(--pink);
          min-height: 500px;
          width: 100%;
          margin: 40px 0;
        }
      `}</style>
    </TextSection>
  )
}
