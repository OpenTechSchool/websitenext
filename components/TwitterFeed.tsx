import PropTypes from 'prop-types'
import Link from 'next/link'
import useTranslation from '../hooks/useTranslation'
import TextSection from '../components/Section/TextSection'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TwitterFeed = ({ screenName }) => {
  const { t } = useTranslation()

  return (
    <TextSection classname='grey' title='Tweets'>
      <div className='wrapper'>
        <div className='tweets-from'>
          {t('twitterfeed.tweetsFrom')}{' '}
          <Link href={`https://twitter.com/${screenName}`}>
            <a>@{screenName}</a>
          </Link>
        </div>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName={screenName}
          noFooter={true}
          noHeader={true}
          options={{ height: 600 }}
        />
      </div>
      <style jsx>{`
        .wrapper {
          max-width: 600px;
          min-height: 600px;
          margin: -20px auto 0 auto;
          text-align: center;
        }

        .tweets-from {
          margin-bottom: 20px;
        }

        h1 {
          text-align: center;
        }
      `}</style>
    </TextSection>
  )
}

TwitterFeed.propTypes = {
  screenName: PropTypes.string,
}

export default TwitterFeed
