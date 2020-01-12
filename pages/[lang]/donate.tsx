import { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import TextSection from '../../components/Section/TextSection'

const Community: NextPage<any> = () => {
  const { t } = useTranslation()

  return (
    <PageLayout
      siteTitle={t('donate.siteTitle')}
      siteDescription={t('donate.siteDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection title={t('donate.title')}>
        <p>Text</p>
      </TextSection>

      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Community)
