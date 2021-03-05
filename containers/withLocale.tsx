import { NextPage } from 'next'
import { isLocale, Locale } from '../translations/types'
import { LocaleProvider } from '../context/LocaleContext'

interface LangProps {
  locale?: Locale
}

const WithLocale = (WrappedPage: NextPage<any>) => {
  const WithLocale: NextPage<any, LangProps> = ({ ...pageProps }) => {
    // if (!locale) {
    //   return <Error statusCode={404} />
    // }

    return (
      <LocaleProvider lang={'en' /*locale*/}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {}
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx)
    }

    if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
      return { ...pageProps, locale: undefined }
    }

    return { ...pageProps, locale: ctx.query.lang }
  }

  return WithLocale
}

export default WithLocale
