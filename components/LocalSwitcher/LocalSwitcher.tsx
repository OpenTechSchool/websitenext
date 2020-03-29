import React, { useContext, useCallback } from 'react'
import { useRouter } from 'next/dist/client/router'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { withStyles } from '@material-ui/core/styles'
import { locales, languageNames } from '../../translations/config'
import { LocaleContext } from '../../context/LocaleContext'

const MenuItemStyle = withStyles({
  root: {
    fontSize: '1.4rem',
  },
})(MenuItem)

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
        <Select
          className='localSwitch-select'
          value={locale}
          onChange={handleLocaleChange}
          displayEmpty
        >
          {locales.map(locale => (
            <MenuItemStyle key={locale} value={locale}>
              {languageNames[locale]}
            </MenuItemStyle>
          ))}
        </Select>
      </FormControl>
      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          min-height: 50px;
          align-items: center;
          padding: 0 20px;
        }

        section :global(.localSwitch-select) {
          font-size: 1.4rem;
        }

        section :global(li.localSwitch-select svg) {
          font-size: 20px;
        }
      `}</style>
    </section>
  )
}

export default LocaleSwitcher
