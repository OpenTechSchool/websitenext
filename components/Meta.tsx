import PropTypes from 'prop-types'
import Head from 'next/head'
import useTranslation from '../hooks/useTranslation'

export default function Meta({ pageTitle, pageDescription, pageImage }) {
  const { t } = useTranslation()
  pageTitle = `${pageTitle} | OpenTechSchool`
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>{pageTitle}</title>
        {!!pageDescription && (
          <meta name='description' content={pageDescription} />
        )}
        <meta property='og:title' content={pageTitle} />
        {!!pageDescription && (
          <meta name='og:description' content={pageDescription} />
        )}
        <meta property='fb:admins' content='825782113' />
        <meta
          property='og:image'
          content={pageImage || '/sharing-images/website-into-sharing.png'}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@OpenTechSchool' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96.png'
          sizes='96x96'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:400,700|Open+Sans:400,500,700&display=swap'
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
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
  pageImage: PropTypes.string,
}
