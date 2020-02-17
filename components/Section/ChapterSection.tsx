import { useState, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'
import PropTypes from 'prop-types'
import Link from 'next/link'
import matter from 'gray-matter'
import flatten from 'lodash/flatten'
import Grid from '@material-ui/core/Grid'
import useTranslation from '../../hooks/useTranslation'
import TextSection from './TextSection'
import Events from '../Events'

interface ChapterSectionProps {
  title: string
}

export default function ChapterSection({ title }: ChapterSectionProps) {
  const { locale, t } = useTranslation()

  const cities = (ctx => {
    const keys = ctx.keys() // get all keys from data/cities
    const values = keys.map(ctx) // grab the values from these files

    const data = keys.map((key, index) => {
      const value = values[index]
      const cityContent = matter((value as any).default)

      return {
        cityContent,
      }
    })
    return data
  })(require.context(`../../data/cities/en`, true, /\.md$/))

  const meetupNames = cities
    .filter(
      ({ cityContent: { data } }) => !data.is_inactive && data.meetup_name
    )
    .map(({ cityContent: { data } }) => data.meetup_name)

  const [events, setEvents] = useState<any>({})
  const [hasEvents, setHasEvents] = useState(false)
  const [showMoreLink, setShowMoreLink] = useState(true)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    if (events.firstBatch) {
      const secondBatch = [...events.allEvents].splice(6, 10)
      if (!secondBatch.length) setShowMoreLink(false)
      setEvents({ ...events, secondBatch })
      return
    }

    setLoading(true)
    Promise.all(
      meetupNames.map(meetupName =>
        fetchJsonp(`https://api.meetup.com/${meetupName}/events`).then(resp =>
          resp.json()
        )
      )
    ).then(jsons => {
      const mixEvents = flatten(jsons.map(({ data }) => data.splice(0, 10)))
      mixEvents.sort(
        (a, b) => Date.parse(a.local_date) - Date.parse(b.local_date)
      )

      if (mixEvents.length) {
        const firstBatch = [...mixEvents].splice(0, 6)
        setEvents({ firstBatch, allEvents: mixEvents })
        setHasEvents(true)
      } else {
        setHasEvents(false)
      }
    })

    setLoading(false)
  }, [showMoreLink])

  return (
    <TextSection title={title} anchor='find-events'>
      <h4>{t('chapter.active')}</h4>

      <Grid container justify='space-around'>
        {cities &&
          cities.map(({ cityContent: { data } }, i) => {
            if (!data.is_inactive)
              return (
                <Grid item key={i}>
                  <Link
                    href={`/[lang]/city/[slug]`}
                    as={`/${locale}/city/${data.slug}`}
                  >
                    <a>{data.title}</a>
                  </Link>
                </Grid>
              )
          })}
      </Grid>

      <h4>{t('chapter.events')}</h4>
      <Events
        title={t('city.suggestEvent')}
        events={events}
        isLoading={isLoading}
        hasEvents={hasEvents}
        showMoreLink={showMoreLink}
        setShowMoreLink={setShowMoreLink}
        hasMixedGroups
      />

      <style jsx>{`
        a {
          color: var(--pink);
          text-transform: uppercase;
          font-family: var(--primaryFont);
          font-weight: 600;
          font-size: 24px;
        }

        a:hover {
          color: var(--mainBlue);
        }

        h4 {
          font-family: var(--secondaryFont);
          font-weight: 500;
          font-size: 22px;
          color: #828282;
          text-align: center;
          text-transform: uppercase;
        }
      `}</style>
    </TextSection>
  )
}

ChapterSection.propTypes = {
  title: PropTypes.string.isRequired,
}
