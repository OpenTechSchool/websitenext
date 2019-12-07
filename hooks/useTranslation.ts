import { useContext } from 'react'
import { LocaleContext } from '../context/LocaleContext'
import ENstrings from '../translations/en/strings'
import DEstrings from '../translations/de/strings'

export default function useTranslation() {
  const { locale } = useContext(LocaleContext)
  let strings

  switch (locale) {
    case 'de':
      strings = DEstrings
    default:
      strings = ENstrings
  }

  function t(key: string) {
    if (!strings[key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`)
    }
    return strings[key] || ''
  }

  return {
    t,
    locale,
  }
}
