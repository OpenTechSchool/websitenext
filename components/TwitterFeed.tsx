import PropTypes from 'prop-types'
import Link from 'next/link'
import useTranslation from '../hooks/useTranslation'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TwitterFeed = ({ screenName }) => {
  const { t } = useTranslation()

  return (
    <section>
      <h1>Tweets</h1>
      {t('twitterfeed.tweetsFrom')}{' '}
      <Link href={`https://twitter.com/${screenName}`}>
        <a>@{screenName}</a>
      </Link>
      <TwitterTimelineEmbed
        sourceType='profile'
        screenName={screenName}
        noFooter='true'
        noHeader='true'
        options={{ height: 600 }}
      />
      <style jsx>{`
        section {
          max-width: 600px;
          margin: 0 auto;
        }

        h1 {
          text-align: center;
        }
      `}</style>
    </section>
  )
}

TwitterFeed.propTypes = {
  screenName: PropTypes.string,
}

export default TwitterFeed
