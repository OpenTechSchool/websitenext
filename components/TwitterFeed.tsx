import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import useTranslation from '../hooks/useTranslation'
import TextSection from '../components/Section/TextSection'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const TwitterFeed = ({ screenName }) => {
  const { t } = useTranslation()
  const twitterFeedContainer = useRef()
  const [isTwitterFeedVisible, setTwitterFeedVisible] = useState(false)

  useIntersectionObserver({
    target: twitterFeedContainer,
    rootMargin: '100px',
    onIntersect: ([{ isIntersecting }]) => {
      if (!isTwitterFeedVisible) {
        setTwitterFeedVisible(isIntersecting)
      }
    },
  })

  return (
    <div ref={twitterFeedContainer}>
      {isTwitterFeedVisible && (
        <TextSection classname='grey' title='Tweets'>
          <div className='wrapper'>
            <div className='tweets-from'>
              {t('twitterfeed.tweetsFrom')}{' '}
              <a
                href={`https://twitter.com/${screenName}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                @{screenName}
              </a>
            </div>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName={screenName}
              noFooter={true}
              noHeader={true}
              options={{ height: 600 }}
            />
          </div>
        </TextSection>
      )}
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
    </div>
  )
}

TwitterFeed.propTypes = {
  screenName: PropTypes.string,
}

export default TwitterFeed
