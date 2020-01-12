import { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import TextSection from '../../components/Section/TextSection'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'

import { mediaquery } from '../../style/style'

const About: NextPage<any> = () => {
  const { t } = useTranslation()

  return (
    <PageLayout
      siteTitle='about.siteTitle'
      siteDescription={t('about.siteDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>
      <TextSection classname='default' title={t('about.historyTitle')}>
        <div className='historySection'>
          <p>{t('about.history')}</p>
          <img src='/about.jpg' />
        </div>
      </TextSection>
      <TextSection classname='pink' title='What is OpenTechSchool?'>
        <p>{t('about.explanation')}</p>
      </TextSection>
      <TextSection classname='highlight' title='Core values'>
        <p>{t('about.coreValue.title')}</p>
      </TextSection>
      <TextSection classname='slide' title='Openness'>
        <p>{t('about.coreValue.openness')}</p>
      </TextSection>
      <TextSection classname='grey' title='Our Licensing Policy'>
        <p>
          In correspondence with our values we release all learning materials,
          blueprints and any other kind of content under the{` `}
          <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en_US'>
            Creative Commons Attribution-ShareAlike 3.0 Unported License:
          </a>
          {` `}
          As long as you attribute the work to the OpenTechSchool (usually by
          mentioning such and providing the link to the original material) and
          share it under the same licence again, you are free to use, share,
          copy and modify it - even in a commercial context.
        </p>
      </TextSection>
      <style jsx>{`
        .historySection {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .historySection img {
          padding-top: 30px;
        }

        @media (${mediaquery.tabletToDesktop}) {
          .historySection {
            flex-direction: wrap;
          }
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(About)
