import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Squid from '../Svg/OtsSquid'
import Wave from '../Svg/Wave'

import { mediaquery } from '../../style/style'

export function Masthead() {
  const isDesktop = useMediaQuery(`(${mediaquery.smallToTablet})`)

  return (
    <div className='masthead'>
      <section>
        <div className='content-wrapper'>
          <Grid container justify='space-between'>
            <Grid item xs={5} md={4}>
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
      {isDesktop && (
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
          .wave svg {
            width: 100%;
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
            transform: scale(0.8);
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
              transform: none;
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
