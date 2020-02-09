import { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

const MEETUP_KEY = '38406b383fa43605b6b234269316'

function Event({ event, chapterName }) {
  const { link, name, local_date, local_time, venue } = event
  return (
    <Grid container justify='space-between' alignItems='stretch' spacing={4}>
      <Grid item xs={12} md={6}>
        <a href={link} rel='noopener noreferrer' target='_blank'>
          <div className='container'>
            <div className='timeInfo'>
              <div className='date'>{local_date}</div>
              <div className='time'>{local_time}</div>
            </div>
            <div className='info'>
              <div className='eventName'>{name}</div>
              <div className='venue'>{venue.name}</div>
            </div>
          </div>
        </a>
      </Grid>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          padding: 4px;
        }

        .timeInfo {
          border-right: 1px solid var(--mainBlue);
        }

        .date {
          color: var(--mainBlue);
          font-size: 12px;
        }

        .eventName {
          color: var(--mainBlue);
        }

        .venue {
          color: var(--pink);
        }
      `}</style>
    </Grid>
  )
}

Event.propTypes = {}

function Events({ title, meetupName }) {
  const [data, setData] = useState({ events: [] })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          'https://api.meetup.com/opentechschool-berlin/events?&page=1,',
          {
            method: 'GET',
            mode: 'no-cors',
          }
        )

        console.log('result', result.text())
        if (result.ok) {
          console.log('result', result.json())
          setData(result.json())
        }
      } catch (err) {
        console.error('fetch error', err) // Failed to fetch
      }
    }
    fetchData()
  }, [])

  console.log('events', data)

  return (
    <div>
      <h3>{title}</h3>
      {/* {!data.events.length && <p> No events planned </p>}

      {data.events.map((event, i) => (
        <p key={i}>Event!</p>
        // <Event event={event} key={i} />
      ))} */}
      <a> More </a>
    </div>
  )
}

Events.propTypes = {}

export default Events
