import { locales } from './config'

export type Locale = typeof locales[number]

export type Strings = {
  [key in Locale]: {
    [key: string]: string
  }
}

// Typeguard: return true if tested value is locale and set the value as 'Locale'
export function isLocale(tested: string): tested is Locale {
  return locales.some(locale => locale === tested)
}
