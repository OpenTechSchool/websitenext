import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { getInitialLocale } from '../translations/getInitialLocale'

// only purpose of this page is to redirect to a language specific subpages
export default function Index() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/[lang]', `/${getInitialLocale()}`)
  })

  return (
    <Head>
      <meta name='robots' content='noindex, nofollow' />
    </Head>
  )
}
