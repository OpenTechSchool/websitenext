import { defaultLocale } from './config'
import { Locale, isLocale } from './types'

export function getInitialLocale(): Locale {
  // from prev session
  const localSetting = localStorage.getItem('locale')
  if (localSetting && isLocale(localSetting)) {
    return localSetting
  }

  // take the browser's lang
  const [browserSetting] = navigator.language.split('-')
  if (isLocale(browserSetting)) {
    return browserSetting
  }
  return defaultLocale
}
