import React from 'react'
import PropTypes from 'prop-types'
import OutlineButton from '../Button/OutlineButton'

function CityHero({ title, tagline, ctaLink, membersNumber }) {
  return (
    <section style={{ backgroundImage: `url(/${title}_cityBg.jpg)` }}>
      <div className='container'>
        <h2>{title}</h2>
        <p className='tagline'>
          <i>{tagline}</i>
        </p>
        <OutlineButton href={ctaLink}> join now </OutlineButton>
        <p>
          <small>{membersNumber} Learners</small>
        </p>
      </div>
      <style jsx>{`
        section {
          background-size: cover;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 10px 0 30px 0;
          min-height: 100vh;
          color: white;
        }

        h2 {
          color: white;
        }
      `}</style>
    </section>
  )
}

CityHero.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  membersNumber: PropTypes.number.isRequired,
}

export default CityHero
