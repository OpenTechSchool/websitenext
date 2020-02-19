import Grid, { GridDirection } from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Button from '../../components/Button/Button'
import useTranslation from '../../hooks/useTranslation'
import TextSection from './TextSection'
import ChatIcon from '@material-ui/icons/Chat'

export default function ContactSection() {
  const { t } = useTranslation()
  const chatIconStyleFirst = { fontSize: 180, color: 'var(--pink)' }
  const chatIconStyleSecond = {
    fontSize: 100,
    color: 'var(--pink)',
    marginTop: '10px',
  }
  const chatIconStyleThird = {
    fontSize: 180,
    color: 'var(--pink)',
    marginTop: '-5px',
  }
  const theme = useTheme()
  const direction: GridDirection = useMediaQuery(theme.breakpoints.up('md'))
    ? 'row'
    : 'column-reverse'

  return (
    <TextSection classname='grey' anchor='get-in-touch'>
      <Grid container direction={direction} justify='center'>
        <Grid item xs={12} md={4}>
          <div className='message-icons'>
            <ChatIcon style={chatIconStyleFirst} />
            <ChatIcon style={chatIconStyleSecond} />
            <ChatIcon style={chatIconStyleThird} />
          </div>
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
              {/* <Button href='https://opentechschool-slack.herokuapp.com'>
                {t('homepage.getInTouch.slack')}
              </Button> */}
            </Grid>
            <Grid item xs={6}>
              {/* <Button href='mailto:'>{t('homepage.getInTouch.email')}</Button> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <style jsx>{`
        .message-icons {
          text-align: center;
          width: 300px;
          margin-top: 20px;
        }
      `}</style>
    </TextSection>
  )
}
