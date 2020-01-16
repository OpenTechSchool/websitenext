import { NextPage } from 'next'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid, { GridDirection } from '@material-ui/core/Grid'
import PageLayout from '../../components/PageLayout/PageLayout'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import TextSection from '../../components/Section/TextSection'

const Community: NextPage = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const direction: GridDirection = useMediaQuery(theme.breakpoints.up('md'))
    ? 'row'
    : 'column-reverse'

  console.log(direction)

  return (
    <PageLayout
      siteTitle={t('contribute.siteTitle')}
      siteDescription={t('contribute.siteDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>

      <TextSection title={t('contribute.howToContribute.title')}>
        <Grid container justify='space-between'>
          <Grid item xs={12} md={5}>
            <h2>{t('contribute.howToContribute.joinChapter')}</h2>
            <p>
              Aliquam erat volutpat. Nunc orci enim, scelerisque non rhoncus
              maximus, vestibulum sit amet elit. Proin venenatis, justo non
              mattis tristique, lorem justo porta quam, ac pretium sapien eros
              sed ligula.
            </p>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
        </Grid>
        <Grid container direction={direction} justify='space-between'>
          <Grid item xs={12} md={5}>
            <div className='placeholder'></div>
          </Grid>
          <Grid item xs={12} md={5}>
            <h2>{t('contribute.howToContribute.openChapter')}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              efficitur libero ac nunc malesuada mattis. Proin dolor lorem,
              luctus at purus ut, lacinia feugiat quam. Suspendisse molestie
              volutpat risus, vel tempus leo mollis ac. Maecenas facilisis augue
              at gravida efficitur. Pellentesque lectus risus, ultricies ac
              justo semper, tincidunt fringilla urna. Aliquam erat volutpat.
              Mauris fermentum diam in velit auctor vestibulum. Sed nisi mi,
              pharetra sit amet faucibus sed, suscipit sit amet sapien. Sed
              semper libero nec pulvinar vestibulum.
            </p>
          </Grid>
        </Grid>
      </TextSection>

      <TextSection title={t('contribute.sponsor.title')} anchor='sponsor'>
        Text
      </TextSection>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        .placeholder {
          background: var(--pink);
          min-height: 500px;
          width: 100%;
          margin: 40px 0;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(Community)
