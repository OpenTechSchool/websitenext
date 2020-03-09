import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'
import { mediaquery } from '../../style/style'

export default function Footer() {
  const { locale, t } = useTranslation()

  return (
    <footer>
      <div className='grid-wrapper'>
        <Grid container justify='space-around'>
          <Grid item xs={10} sm={3}>
            <h4>{t('footer.getinvolved')}</h4>
            <ul>
              <li>
                <Link
                  href={`/[lang]/community#event-formats`}
                  as={`/${locale}/community#event-formats`}
                >
                  <a>{t('footer.joinMeetup')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/[lang]/guides#organize-meetup`}
                  as={`/${locale}/guides#organize-meetup`}
                >
                  <a>{t('footer.organizeEvent')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/[lang]/guides#start-chapter`}
                  as={`/${locale}/guides#start-chapter`}
                >
                  <a>{t('footer.startChapter')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/[lang]/contribute#sponsor`}
                  as={`/${locale}/contribute#sponsor`}
                  scroll={false}
                >
                  <a>{t('footer.becomeSponsor')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={10} sm={3}>
            <h4>{t('footer.ourValues')}</h4>
            <ul>
              <li>
                <Link
                  href={`/[lang]/about#what-drives-us`}
                  as={`/${locale}/about#what-drives-us`}
                >
                  <a>{t('footer.whatDrivesUs')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/[lang]/about#core-values`}
                  as={`/${locale}/about#core-values`}
                >
                  <a>{t('footer.coreValues')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/[lang]/guides#coaching-guidelines`}
                  as={`/${locale}/guides#coaching-guidelines`}
                >
                  <a>{t('footer.coachingGuidelines')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/[lang]/codeOfConduct`}
                  as={`/${locale}/codeOfConduct`}
                >
                  <a>{t('footer.codeOfConduct')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={10} sm={3}>
            <h4>{t('footer.aboutUs')}</h4>
            <ul>
              <li>
                <Link href={`/[lang]/about`} as={`/${locale}/about`}>
                  <a>{t('footer.learnMore')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container justify='space-around'>
          <Grid item xs={10} sm={11}>
            <div className='note'>
              <p className='license'>{t('footer.createCommons')}</p>
              <p className='imprint'>
                © {new Date().getFullYear()} by{' '}
                <Link href={`/[lang]/about`} as={`/${locale}/about`}>
                  <a>OpenTechSchool e.V.</a>
                </Link>
                <span className='spacer'>||</span>
                <Link
                  href={`/[lang]/#get-in-touch`}
                  as={`/${locale}/#get-in-touch`}
                >
                  <a>{t('footer.contactUs')}</a>
                </Link>
                <span className='spacer'>||</span>
                <Link href={`/[lang]/imprint`} as={`/${locale}/imprint`}>
                  <a>{t('footer.imprint')}</a>
                </Link>
              </p>
            </div>
          </Grid>
        </Grid>
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
          text-align: center;
        }

        h4 {
          font-weight: 800;
          font-size: 24px;
          color: white;
        }

        ul {
          margin-bottom: 20px;
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
           {
            /* margin-top: 92px; */
          }
          margin-top: 70px;
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

        @media (${mediaquery.smallToTablet}) {
          footer {
            text-align: left;
          }

          ul {
            margin-bottom: 0px;
          }

          .note {
            font-size: 14px;
            margin-top: 92px;
          }
        }
      `}</style>
    </footer>
  )
}
