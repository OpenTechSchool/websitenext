import { NextPage } from 'next'
import { isLocale, Locale } from '../translations/types'
import { LocaleProvider } from '../context/LocaleContext'

interface LangProps {
  locale?: Locale
}

const WithLocale = (WrappedPage: NextPage<any>) => {
  const WithLocale: NextPage<any, LangProps> = ({ ...pageProps }) => {
    return (
      <LocaleProvider lang={'en'}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  return WithLocale
}

export default WithLocale
