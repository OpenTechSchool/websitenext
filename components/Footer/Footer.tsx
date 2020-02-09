import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'

export default function Footer() {
  const { locale, t } = useTranslation()

  return (
    <footer>
      <div className='grid-wrapper'>
        <Grid container justify='space-around'>
          <Grid item xs={12} sm={3}>
            <h3>{t('footer.getinvolved')}</h3>
            <ul>
              <li>
                <Link href={`/${locale}/community#event-formats`}>
                  <a>{t('footer.joinMeetup')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/guides#organize-meetup`}>
                  <a>{t('footer.organizeEvent')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/guides#start-chapter`}>
                  <a>{t('footer.startChapter')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contribute#sponsor`} scroll={false}>
                  <a>{t('footer.becomeSponsor')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h3>{t('footer.ourValues')}</h3>
            <ul>
              <li>
                <Link href={`/${locale}/about#what-drives-us`}>
                  <a>{t('footer.whatDrivesUs')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about#core-values`}>
                  <a>{t('footer.coreValues')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/guides#coaching-guidelines`}>
                  <a>{t('footer.coachingGuidelines')}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/codeOfConduct`}>
                  <a>{t('footer.codeOfConduct')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h3>{t('footer.aboutUs')}</h3>
            <ul>
              <li>
                <Link href={`/${locale}/about`}>
                  <a>{t('footer.learnMore')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <div className='note'>
          <p className='license'>{t('footer.createCommons')}</p>
          <p className='imprint'>
            © {new Date().getFullYear()} by{' '}
            <Link href={`/${locale}/about`}>
              <a>OpenTechSchool e.V.</a>
            </Link>
            <span className='spacer'>||</span>
            <Link href={`/${locale}/#get-in-touch`}>
              <a>{t('footer.contactUs')}</a>
            </Link>
            <span className='spacer'>||</span>
            <Link href={`/${locale}/imprint`}>
              <a>{t('footer.imprint')}</a>
            </Link>
          </p>
        </div>
      </div>
      <style jsx>{`
        footer {
          width: 100%;
          padding: 72px 0 92px 0;
          background-color: var(--secondaryBlue);
          min-height: 100px;
          font-weight: 500;
          font-size: 20px;
          color: #9dd3f2;
        }

        h3 {
          font-weight: 800;
          font-size: 24px;
          color: white;
        }

        a {
          color: #9dd3f2;
          font-weight: 500;
          text-decoration: none;
        }

        .grid-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .note {
          font-size: 14px;
          padding: 0 2rem;
          margin-top: 92px;
        }

        .note a {
          color: white;
        }

        .imprint {
          text-align: center;
          font-size: 18px;
          margin-top: 32px;
        }

        .spacer {
          padding: 0 15px;
        }
      `}</style>
    </footer>
  )
}
