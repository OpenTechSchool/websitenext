import { NextPage } from 'next'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import HomepageLayout from '../../components/HomepageLayout/HomepageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import TextSection from '../../components/Section/TextSection'
import ChapterSection from '../../components/Section/ChapterSection'

interface IndexProps {
  cities?: Array<Object>
}

export const Index: NextPage<any, IndexProps> = ({ cities }) => {
  const { t } = useTranslation()

  return (
    <HomepageLayout
      siteTitle='homepage.siteTitle'
      siteDescription='homepage.siteDescription'
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <h1>{t('homepage.otsInitiative.title')}</h1>
            <p>{t('homepage.otsInitiative.otsInitiativeDesc')}</p>
            <br />
            <p>{t('homepage.otsInitiative.otsInitiativeDesc2')}</p>
            <br />
            <br />
            <Link href=''>
              <a>{t('homepage.otsInitiative.learnMore')}</a>
            </Link>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection classname='grey' title={t('homepage.waysToJoin.title')}>
        <p>Text</p>
      </TextSection>

      <ChapterSection title={t('chapter.title')} />

      <style jsx>{`
        .placeholder {
          background: var(--pink);
          min-height: 500px;
          width: 100%;
          margin: 40px 0;
        }
      `}</style>
    </HomepageLayout>
  )
}

export default WithLocale(Index)
