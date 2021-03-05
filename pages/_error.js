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
        <PageLayout pageTitle={t('404.pageTitle')} pageDescription={''}>
          <div className='error'>
            {t('404.description')}
            <br />
            <b>{t('404.description2')}</b>
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
        <PageLayout pageTitle={t('500.pageTitle')}>
          <NextError statusCode={errorCode} title={t('500.pageTitle')} />
          <div className='error'>{t('500.description')}</div>
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
