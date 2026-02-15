import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import Squid from '../Svg/OtsSquid'
import Wave from '../Svg/Wave'
import useTranslation from '../../hooks/useTranslation'

import { mediaquery } from '../../style/style'

export function Masthead() {
  const showIllustration = useMediaQuery(`(min-width: 960px)`)
  const { t } = useTranslation()

  return (
    <div className='masthead'>
      <section>
        <div className='content-wrapper'>
          <Grid container justifyContent='space-between'>
            <Grid item xs={12} md={4}>
              <h1>{t('homepage.masthead.title')}</h1>
              <p>{t('homepage.masthead.subtitle')}</p>
            </Grid>
          </Grid>
        </div>
      </section>
      <Wave />
      {showIllustration && (
        <div className='squid'>
          <Squid />
        </div>
      )}
      <style jsx>
        {`
          section {
            padding: 0 25px;
          }
          h1 {
            color: white;
            text-align: left;
            font-size: 38px;
            font-size: 3.8rem;
          }
          p {
            min-height: 100px;
            text-align: left;
            font-size: 20px;
            font-size: 2rem;
            margin-bottom: 0;
          }
          .content-wrapper {
            max-width: 1180px;
            margin: 0px auto;
          }
          .masthead {
            position: relative;
            background-color: var(--otsColor);
            color: white;
            padding-top: 50px;
          }
          .squid {
            position: absolute;
            right: -60px;
            top: 20px;
          }
          @media (${mediaquery.mobile}) {
            .masthead {
              padding-top: 0;
            }
          }
          @media (${mediaquery.tabletToDesktop}) {
            .squid {
              right: 20px;
              top: 0;
            }
          }
          @media (${mediaquery.desktopToBigScreen}) {
            .squid {
              right: 40px;
              top: 0;
            }
          }
          @media screen and (min-width: 1400px) {
            h1 {
              font-size: 58px;
              font-size: 5.8rem;
              padding: 60px 0;
            }
            .squid {
              right: calc(50vw - 650px);
              top: 60px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Masthead
