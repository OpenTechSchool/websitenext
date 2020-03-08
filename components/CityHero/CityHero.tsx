import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import fetchJsonp from 'fetch-jsonp'
import { PermIdentity } from '@material-ui/icons'
import { mediaquery } from '../../style/style'
// import Link from 'next/link'
// import OutlineButton from '../Button/OutlineButton'
import useTranslation from '../../hooks/useTranslation'

function CityHero({ cityName, title, tagline, meetupName, credits }) {
  const { t } = useTranslation()
  const [members, setMembers] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchJsonp(`https://api.meetup.com/${meetupName}`)

        if (result.ok) {
          const json = await result.json()
          const group = json.data
          setMembers(group.members)
        }
      } catch (err) {
        console.error('fetch error', err)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <section>
        <div style={{ backgroundImage: `url(/${cityName}_cityBg.jpg)` }}>
          <h1>{title}</h1>
          <p className='tagline'>
            <i>&quot;{tagline}&quot;</i>
          </p>
          {/* <span className='button'>
          <OutlineButton>
            <Link href={`/[lang]/guides`} as={`/${locale}/guides`}>
              <a>{t('common.joinNow')}</a>
            </Link>
          </OutlineButton>
        </span> */}
          <p className='members'>
            <span className='membersIcon'>
              <PermIdentity />
            </span>
            {members && (
              <small>
                {members} {t('common.learners')}
              </small>
            )}
          </p>
          <p className='credits'>Credits: {credits}</p>
        </div>
      </section>

      <style jsx>{`
        section div {
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

        section div::after {
          position: absolute;
          content: ' ';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-color: rgba(45, 156, 219, 0.7);
        }

        @media (${mediaquery.desktopToBigScreen}) {
          section {
            background-color: var(--mainBlue);
          }
          section div {
            max-width: 1200px;
            margin: 0 auto;
          }
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

        .members :global(svg) {
          font-size: 1em;
          position: relative;
          top: 2px;
          margin-right: 6px;
          transform: scale(1.2);
        }

        .credits {
          font-color: #fff;
          font-size: 14px;
          z-index: 1;
          position: absolute;
          left: 10px;
          bottom: 0px;
        }
      `}</style>
    </div>
  )
}

CityHero.propTypes = {
  cityName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  meetupName: PropTypes.string.isRequired,
  credits: PropTypes.string,
}

export default CityHero
