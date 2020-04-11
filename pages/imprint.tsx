import { NextPage } from 'next'
import PageLayout from '../components/PageLayout/PageLayout'
import TextSection from '../components/Section/TextSection'
import WithLocale from '../containers/withLocale'

const Imprint: NextPage = () => {
  return (
    <PageLayout siteTitle='' siteDescription=''>
      <TextSection title='Imprint'>
        <p>Angaben gemäß § 5 TMG:</p>
        <p>
          OpenTechSchool e.V.
          <br />
          c/o co.up Adalbertstr. 8
          <br />
          10999 Berlin, Germany
          <br />
          Kontakt: foundation.board |at| opentechschool |dot| org
        </p>
      </TextSection>
    </PageLayout>
  )
}

export default WithLocale(Imprint)
