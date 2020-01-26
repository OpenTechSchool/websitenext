import { NextPage } from 'next'
import TextSection from '../../components/Section/TextSection'
import WithLocale from '../../containers/withLocale'
import PageLayout from '../../components/PageLayout/PageLayout'

const CodeOfConduct: NextPage = () => {
  return (
    <PageLayout siteTitle='' siteDescription=''>
      <TextSection title='Code of Conduct'>
        <p></p>
      </TextSection>
    </PageLayout>
  )
}

export default WithLocale(CodeOfConduct)
