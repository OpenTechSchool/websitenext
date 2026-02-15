import React, { useContext, useCallback } from 'react'
import { useRouter } from 'next/dist/client/router'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import { locales, languageNames } from '../../translations/config'
import { LocaleContext } from '../../context/LocaleContext'

const MenuItemStyle = styled(MenuItem)({
  fontSize: '1.4rem',
})

const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
  const { locale } = useContext(LocaleContext)

  const handleLocaleChange = useCallback(
    (e: SelectChangeEvent) => {
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
          {locales.map((locale) => (
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
