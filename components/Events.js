import { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import Link from 'next/link'
import useTranslation from '../hooks/useTranslation'
import ArrowDown from '@material-ui/icons/ArrowDropDown'
import ArrowRight from '@material-ui/icons/ArrowRight'

function Event({ event }) {
  const { link, name, local_date, local_time, venue } = event
  const formatDate = format(new Date(local_date), 'MMM do yy')
  return (
    <Grid item xs={12} md={4}>
      <a href={link} rel='noopener noreferrer' target='_blank'>
        <div className='container'>
          <div className='timeInfo'>
            <div className='date'>{formatDate}</div>
            <p className='time'>{local_time}</p>
          </div>
          <div className='info'>
            <div className='eventName'>{name}</div>
            <div className='venue'>
              {venue && `${venue.name} ${venue.city ? ' - ' + venue.city : ''}`}
            </div>
          </div>
        </div>
      </a>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          padding: 6px 4px;
          border: 2px solid var(--mainBlue);
          border-radius: 4px;
        }

        .timeInfo {
          padding: 6px 6px 6px 0;
        }

        .date {
          color: var(--mainBlue);
          width: 40px;
          text-align: center;
          line-height: 1.2;
          margin-bottom: 4px;
        }

        .time {
          color: var(--textBlack);
          font-size: 14px;
        }

        .info {
          padding: 6px;
          text-align: left;
          border-left: 2px solid var(--mainBlue);
        }

        .eventName {
          color: var(--mainBlue);
        }

        .venue {
          color: var(--pink);
          font-size: 16px;
        }
      `}</style>
    </Grid>
  )
}

Event.propTypes = {
  event: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    local_date: PropTypes.string.isRequired,
    local_time: PropTypes.string.isRequired,
    venue: PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string,
    }),
  }).isRequired,
}

function Events({
  title,
  events,
  isLoading,
  hasEvents,
  showMoreLink,
  setShowMoreLink,
  hasMixedGroups,
}) {
  const arrowDownStyle = {
    fontSize: 30,
    marginTop: '-20px',
  }

  const arrowRightStyle = {
    fontSize: 30,
  }

  const { locale, t } = useTranslation()
  const meetupName =
    !isLoading && hasEvents && events.firstBatch[0].group.urlname

  return (
    <div className='eventSection'>
      {!hasMixedGroups && (
        <h3>
          <Link href={`/guides`}>
            <a>{title}</a>
          </Link>
        </h3>
      )}
      <div className='events'>
        {isLoading && '...'}
        {!isLoading && !hasEvents && <p> No events planned </p>}
        {!isLoading && hasEvents && (
          <Fragment>
            <Grid container spacing={3}>
              {events.firstBatch.map((event, i) => (
                <Event event={event} key={i} />
              ))}

              {events.secondBatch &&
                events.secondBatch.map((event, i) => (
                  <Event event={event} key={i} />
                ))}
            </Grid>
            {showMoreLink ? (
              <div
                className='moreEvents'
                onClick={() => setShowMoreLink(false)}
              >
                <div>{t('common.more')}</div>
                <ArrowDown style={arrowDownStyle} />
              </div>
            ) : hasMixedGroups ? null : (
              <div>
                <a
                  className='moreEvents'
                  href={`${process.env.external.MEETUP_URL}/${meetupName}`}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  check all events{' '}
                  <span className='arrowRight'>
                    <ArrowRight style={arrowRightStyle} />
                  </span>
                </a>
              </div>
            )}
          </Fragment>
        )}
      </div>
      <style jsx>{`
        .eventSection {
          text-align: center;
          margin: 0 40px;
        }

        h3 {
          margin-top: -40px;
          margin-bottom: 40px;
        }

        .events {
          font-size: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .moreEvents {
          color: var(--pink);
          margin-top: 40px;
          text-transform: uppercase;
        }

        .arrowRight {
          display: inline-block;
          top: 6px;
          position: relative;
        }
      `}</style>
    </div>
  )
}

Events.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasEvents: PropTypes.bool.isRequired,
  showMoreLink: PropTypes.bool.isRequired,
  setShowMoreLink: PropTypes.func.isRequired,
  hasMixedGroups: PropTypes.bool,
}

export default Events
