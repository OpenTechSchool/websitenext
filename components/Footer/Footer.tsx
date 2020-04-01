import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'
import { mediaquery } from '../../style/style'

export default function Footer() {
  const { locale, t } = useTranslation()

  return (
    <footer>
      <div className='grid-wrapper'>
        <Grid container justify='space-between'>
          <Grid item xs={12} sm={3}>
            <h4>{t('footer.getinvolved')}</h4>
            <ul>
              <li>
                <Link
                  href={`/[lang]#find-events`}
                  as={`/${locale}#find-events`}
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
                  href={`/[lang]/contribute#supporter`}
                  as={`/${locale}/contribute#supporter`}
                  scroll={false}
                >
                  <a>{t('footer.becomeSupporter')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={2}>
            <h4>{t('footer.connect')}</h4>
            <ul>
              <li>
                <a
                  href='https://twitter.com/opentechschool'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/OpenTechSchool'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://www.meetup.com/find/?allMeetups=true&keywords=opentechschool&radius=Infinity&sort=default'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Meetup
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/OpenTechSchool/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href='https://discourse.opentechschool.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Discourse
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={2}>
            <h4>{t('footer.aboutUs')}</h4>
            <ul>
              <li>
                <Link
                  href={`/[lang]/about#history`}
                  as={`/${locale}/about#history`}
                >
                  <a>{t('footer.history')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/[lang]/about#foundation`}
                  as={`/${locale}/about#foundation`}
                >
                  <a>{t('footer.foundation')}</a>
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
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h4>{t('footer.moreContent')}</h4>
            <ul>
              <li>
                <Link
                  href={`/[lang]/codeOfConduct`}
                  as={`/${locale}/codeOfConduct`}
                >
                  <a>{t('footer.codeOfConduct')}</a>
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
                <Link href={`/[lang]/imprint`} as={`/${locale}/imprint`}>
                  <a>{t('footer.imprint')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid item xs={10} sm={11}>
            <p className='license'>{t('footer.createCommons')}</p>
            <p className='copyright'>
              © 2012-{new Date().getFullYear()} by OpenTechSchool e.V.
            </p>
          </Grid>
        </Grid>
      </div>
      <style jsx>{`
        .grid-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        footer {
          width: 100%;
          padding: 70px 20px 20px 20px;
          background-color: var(--secondaryBlue);
          color: #fff;
        }

        h4,
        a {
          color: #fff;
        }

        a {
          font-weight: normal;
        }

        a:hover {
          border-bottom: 2px solid #fff;
        }

        .license {
          font-size: 14px;
          margin-top: 100px;
        }

        .copyright {
          text-align: center;
          font-size: 18px;
          margin-top: 32px;
        }

        @media (${mediaquery.mobile}) {
          h4 {
            margin-top: 20px;
          }

          .license {
            margin-top: 50px;
          }
        }
      `}</style>
    </footer>
  )
}
