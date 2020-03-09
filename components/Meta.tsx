import PropTypes from 'prop-types'
import Head from 'next/head'
import useTranslation from '../hooks/useTranslation'

export default function Meta({ siteTitle, siteDescription, noTranslation }) {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>{noTranslation ? siteTitle : t(siteTitle)}</title>
        <meta
          name='Description'
          content={noTranslation ? siteDescription : t(siteDescription)}
        ></meta>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
    </>
  )
}

Meta.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
  noTranslation: PropTypes.bool,
}
