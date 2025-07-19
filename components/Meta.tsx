import PropTypes from 'prop-types'
import Head from 'next/head'
import useTranslation from '../hooks/useTranslation'
import { useAssetPath } from '../utils/assetPath'

export default function Meta({ pageTitle, pageDescription, pageImage }) {
  const { t } = useTranslation()
  const assetPath = useAssetPath()
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
          content={`https://www.opentechschool.org${
            pageImage || assetPath('/sharing-images/website-into-sharing.png?1')
          }`}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@OpenTechSchool' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={assetPath('/apple-touch-icon.png')}
        />
        <link rel='shortcut icon' href={assetPath('/favicon.ico')} />
        <link
          rel='icon'
          type='image/png'
          href={assetPath('/favicon-32x32.png')}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={assetPath('/favicon-96x96.png')}
          sizes='96x96'
        />
        <link rel='manifest' href={assetPath('/site.webmanifest')} />
      </Head>
    </>
  )
}

Meta.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
  pageImage: PropTypes.string,
}
