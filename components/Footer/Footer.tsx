import { Fragment } from 'react'
import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import FacebookIcon from '@material-ui/icons/Facebook'

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
      <style jsx>{`
        footer {
          width: 100%;
          background-color: var(--secondaryBlue);
          min-height: 100px;
          color: white;
        }
      `}</style>
    </footer>
  )
}
