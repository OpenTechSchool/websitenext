import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Squid from '../Svg/OtsSquid'
import Wave from '../Svg/Wave'

import { mediaquery } from '../../style/style'

export function Masthead() {
  const showIllustration = useMediaQuery(`(min-width: 960px)`)

  return (
    <div className='masthead'>
      <section>
        <div className='content-wrapper'>
          <Grid container justify='space-between'>
            <Grid item xs={12} md={4}>
              <h1>Free tech education</h1>
              <p>
                The OpenTechSchool is a movement aiming to offer free tech
                education.
              </p>
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
          }
          p {
            min-height: 100px;
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
            right: -50px;
            top: 0px;
          }
          @media (${mediaquery.mobile}) {
            .masthead {
              padding-top: 0;
            }
          }
          @media (${mediaquery.tabletToDesktop}) {
            .squid {
              right: 20px;
              top: 60px;
            }
          }
          @media (${mediaquery.desktopToBigScreen}) {
            .squid {
              right: 10%;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Masthead
