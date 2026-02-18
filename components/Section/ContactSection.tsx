import Grid, { GridDirection } from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTranslation from '../../hooks/useTranslation'
import TextSection from './TextSection'
import ChatIcon from '@mui/icons-material/Chat'
import Link from 'next/link'
import { mediaquery } from '../../style/style.js'

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
      <Grid container direction={direction} justifyContent='center'>
        <Grid item xs={12} md={4}>
          <div className='message-icons'>
            <ChatIcon style={chatIconStyleFirst} />
            <ChatIcon style={chatIconStyleSecond} />
            <ChatIcon style={chatIconStyleThird} />
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <h2>{t('homepage.getInTouch.title')}</h2>
          <ul className='content'>
            <li>
              <h4 className='subHeading'>
                {t('homepage.getInTouch.events.title')}
              </h4>
              <p>{t('homepage.getInTouch.events.description')}</p>
              <p>
                <Link href={`/#events`} className='highlight'>
                  {t('homepage.getInTouch.events.cta')}
                </Link>
              </p>
            </li>
            <li>
              <h4 className='subHeading'>
                {t('homepage.getInTouch.slack.title')}
              </h4>
              <p>{t('homepage.getInTouch.slack.description')}</p>
              <p>
                <a
                  className='highlight'
                  href='https://join.slack.com/t/opentechschool/shared_invite/zt-1mpx31hk2-C0~bk3sXUhzyT57f8J4Smg'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('homepage.getInTouch.slack.cta')}
                </a>
              </p>
            </li>
            <li>
              <h4 className='subHeading'>
                {t('homepage.getInTouch.email.title')}
              </h4>
              <p>{t('homepage.getInTouch.email.description')}</p>
              <p>
                <a className='highlight' href='mailto:info@opentechschool.org'>
                  {t('homepage.getInTouch.email.cta')}
                </a>
              </p>
            </li>
          </ul>
        </Grid>
      </Grid>
      <style jsx>{`
        .message-icons {
          text-align: center;
          width: 300px;
          margin-top: 20px;
          display: none;
        }
        @media (${mediaquery.tabletToDesktop}) {
          .message-icons {
            display: initial;
          }
        }
        .subHeading {
          padding-bottom: calc(1.45rem / 2); /* same as li > p */
        }
        .content :global(li:first-child) .subHeading:first-child {
          padding-top: 0;
        }
      `}</style>
    </TextSection>
  )
}
