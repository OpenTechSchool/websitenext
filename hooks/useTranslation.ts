import { useContext } from 'react'
import isEmpty from 'lodash/isEmpty'
import { LocaleContext } from '../context/LocaleContext'
import { Strings } from '../translations/types'

// TODO: Make it work with placeholder (like email link/label, dynamic content, ...)
export default function useTranslation() {
  const { locale } = useContext(LocaleContext)

  let strings
  const ENstrings: Strings = require('../translations/en.json')
  const DEstrings: Strings = require('../translations/de.json')

  switch (locale) {
    // case 'de':
    //   strings = DEstrings
    //   break
    default:
      strings = ENstrings
  }

  function t(translation: string, placeholder?) {
    if (isEmpty(strings)) {
      console.warn(`This Translation for locale '${locale}' is empty`)
      return
    }

    const keys = translation.split('.')
    const text = keys.reduce((obj, i) => {
      // TODO: Make it a proper check
      if (obj === undefined || obj[i] === undefined) {
        console.warn(
          `Translation '${translation}' for locale '${locale}' not found.`
        )
        return translation
      }
      return obj[i]
    }, strings)

    return text || translation
  }

  return {
    t,
    locale,
  }
}
