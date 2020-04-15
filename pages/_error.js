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
          <Error statusCode={errorCode} />
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
