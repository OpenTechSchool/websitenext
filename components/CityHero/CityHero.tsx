import React from 'react'
import PropTypes from 'prop-types'
import OutlineButton from '../Button/OutlineButton'
import { PermIdentity } from '@material-ui/icons'

function CityHero({ title, tagline, ctaLink, membersNumber }) {
  return (
    <div>
      <div className='block'>
        <h3>Normal overlay</h3>
      </div>
      <section style={{ backgroundImage: `url(/${title}_cityBg.jpg)` }}>
        <div className='container'>
          <h1>{title}</h1>
          <p className='tagline'>
            <i>&quot;{tagline}&quot;</i>
          </p>
          <OutlineButton href={ctaLink}> join now </OutlineButton>
          <p className='members'>
            <span className='membersIcon'>
              <PermIdentity />
            </span>
            <small>{membersNumber} Learners</small>
          </p>
        </div>
        <style jsx>{`
          .blockh3 {
            color: #fff;
            position: relative;
            z-index: 1;
          }

          .block {
            float: left;
            margin: 5px;
            display: flex;
            justify-content: center;
            align-items: center;

            background: url(https://static.pexels.com/photos/128458/pexels-photo-128458-tiny.jpeg)
                no-repeat 0,
              0;
            height: 200px;
            width: 280px;
            position: relative;
          }

          .block::after {
            position: absolute;
            content: ' ';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-color: rgba(255, 0, 0, 0.5);
          }

          section {
            background-size: cover;
            position: relative;
          }

          section:after {
            position: absolute;
            content: ' ';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-color: rgba(255, 0, 0, 0.5);
          }

          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 10px 0 30px 0;
            min-height: 100vh;
            color: white;
            max-width: 400px;
            margin: 0 auto;
          }

          h1 {
            color: white;
          }

          .tagline {
            line-height: 1.2em;
            text-align: center;
            padding-bottom: 40px;
          }

          .members {
            margin-top: 40px;
          }

          :global(svg) {
            font-size: 1em;
            position: relative;
            top: 2px;
            margin-right: 6px;
            transform: scale(1.2);
          }
        `}</style>
      </section>
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
