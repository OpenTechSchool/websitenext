import React from 'react'
import PropTypes from 'prop-types'
import OutlineButton from '../Button/OutlineButton'
import { PermIdentity } from '@material-ui/icons'

function CityHero({ title, tagline, ctaLink, membersNumber }) {
  return (
    <div>
      <section style={{ backgroundImage: `url(/${title}_cityBg.jpg)` }}>
        <h1>{title}</h1>
        <p className='tagline'>
          <i>&quot;{tagline}&quot;</i>
        </p>
        <span className='button'>
          <OutlineButton href={ctaLink}> join now </OutlineButton>
        </span>
        <p className='members'>
          <span className='membersIcon'>
            <PermIdentity />
          </span>
          <small>{membersNumber} Learners</small>
        </p>
      </section>

      <style jsx>{`
        section {
          background-size: cover;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          flex-direction: column;
          color: white;
          padding-bottom: 40px;
        }

        section::after {
          position: absolute;
          content: ' ';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-color: rgba(45, 156, 219, 0.7);
        }

        h1 {
          color: white;
          z-index: 1;
        }

        .tagline {
          line-height: 1.2em;
          text-align: center;
          padding-bottom: 40px;
          z-index: 1;
        }

        .button {
          z-index: 1;
        }

        .members {
          margin-top: 40px;
          z-index: 1;
        }

        :global(svg) {
          font-size: 1em;
          position: relative;
          top: 2px;
          margin-right: 6px;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  )
}

CityHero.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  membersNumber: PropTypes.number.isRequired,
}

export default CityHero
