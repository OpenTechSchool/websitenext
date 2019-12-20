import React, { useContext, useCallback } from 'react'
import { useRouter } from 'next/dist/client/router'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { locales, languageNames } from '../../translations/config'
import { LocaleContext } from '../../context/LocaleContext'

const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
  const { locale } = useContext(LocaleContext)

  const handleLocaleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${e.target.value}`)
      )
    },
    [router]
  )

  return (
    <section>
      <FormControl>
        <Select value={locale} onChange={handleLocaleChange} displayEmpty>
          {locales.map(locale => (
            <MenuItem key={locale} value={locale}>
              {languageNames[locale]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          min-height: 50px;
          align-items: center;
          justify-content: flex-end;
          padding: 0 20px;
        }
      `}</style>
    </section>
  )
}

export default LocaleSwitcher
