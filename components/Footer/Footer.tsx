import { Fragment } from 'react'
// import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import FacebookIcon from '@material-ui/icons/Facebook'

import { mediaquery } from '../../style/style'

export default function Footer() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <footer>
      {!isDesktop && (
        <Fragment>
          <h3>Connect</h3>
          <a>
            <FacebookIcon />
          </a>
          <a>
            <FacebookIcon />
          </a>
          <a>
            <FacebookIcon />
          </a>
          <a>
            <FacebookIcon />
          </a>
        </Fragment>
      )}

      {isDesktop && (
        <Fragment>
          <div>
            <h3>Get involved</h3>
            <ul>
              <li>Organize an event</li>
              <li>Host an event</li>
              <li>Become a sponsor</li>
            </ul>
          </div>
          <div>
            <h3>our values</h3>
            <ul>
              <li>Organize an event</li>
              <li>Host an event</li>
              <li>Become a sponsor</li>
            </ul>
          </div>
          <div>
            <h3>About us</h3>
            <ul>
              <li>Organize an event</li>
              <li>Host an event</li>
              <li>Become a sponsor</li>
            </ul>
          </div>
        </Fragment>
      )}
      <style jsx>{`
        footer {
          width: 100%;
          background-color: var(--secondaryBlue);
          min-height: 100px;
          color: white;
          padding: 40px 25px;
        }

        h3 {
          color: white;
          padding-top: 0;
          text-align: center;
        }

        @media (${mediaquery.tabletToDesktop}) {
          footer {
            display: flex;
            justify-content: space-evenly;
          }
        }
      `}</style>
    </footer>
  )
}
