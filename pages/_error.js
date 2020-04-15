import Error from 'next/error'
import NextError from 'next/error'
import PropTypes from 'prop-types'
import PageLayout from '../components/PageLayout/PageLayout'
import useTranslation from '../hooks/useTranslation'
import WithLocale from '../containers/withLocale'

function ErrorPage({ errorCode }) {
  const { t } = useTranslation()

  switch (errorCode) {
    case 200: // Also display a 404 if someone requests /_error explicitly
    case 404:
      return (
        <PageLayout
          siteTitle={t('404.siteTitle')}
          siteDescription={t('404.siteDescription')}
        >
          <div className='error'>
            Sorry, we could not find what you are looking for.
            <br />
            <b>Did you get lost in the sea?</b>
            <img src='/illustrations/lost.svg' width='300' alt='lost' />
          </div>
          <style jsx>
            {`
              .error {
                background-color: var(--otsColor);
                text-align: center;
                color: white;
                padding: 120px;
                line-height: 40px;
              }
              .error img {
                margin: 50px auto;
              }
            `}
          </style>
        </PageLayout>
      )
    default:
      return (
        <PageLayout
          siteTitle={t('500.siteTitle')}
          siteDescription={t('500.siteDescription')}
        >
          <NextError statusCode={errorCode} />
        </PageLayout>
      )
  }
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const errorCode = res ? res.statusCode : err ? err.statusCode : 404
  return { errorCode }
}

ErrorPage.propTypes = {
  errorCode: PropTypes.number.isRequired,
}

export default WithLocale(ErrorPage)
