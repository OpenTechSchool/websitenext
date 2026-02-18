import Grid from '@mui/material/Grid'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'
import { mediaquery } from '../../style/style'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <div className='grid-wrapper'>
        <Grid container justifyContent='space-between'>
          <Grid item xs={12} sm={3}>
            <h4>{t('footer.getinvolved')}</h4>
            <ul>
              <li>
                <Link href={`/#find-events`} className='invert'>
                  {t('footer.joinMeetup')}
                </Link>
              </li>
              <li>
                <Link href={`/guides#organize-meetup`} className='invert'>
                  {t('footer.organizeEvent')}
                </Link>
              </li>
              <li>
                <Link href={`/guides#start-chapter`} className='invert'>
                  {t('footer.startChapter')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/contribute#supporter`}
                  scroll={false}
                  className='invert'
                >
                  {t('footer.becomeSupporter')}
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={2}>
            <h4>{t('footer.connect')}</h4>
            <ul>
              <li>
                <a
                  href='https://www.facebook.com/OpenTechSchool'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='invert'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://www.meetup.com/find/?allMeetups=true&keywords=opentechschool&radius=Infinity&sort=default'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='invert'
                >
                  Meetup
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/OpenTechSchool/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='invert'
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href='https://discourse.opentechschool.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='invert'
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
                <Link href={`/about#history`} className='invert'>
                  {t('footer.history')}
                </Link>
              </li>
              <li>
                <Link href={`/about#foundation`} className='invert'>
                  {t('footer.foundation')}
                </Link>
              </li>
              <li>
                <Link href={`/about#core-values`} className='invert'>
                  {t('footer.coreValues')}
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h4>{t('footer.moreContent')}</h4>
            <ul>
              <li>
                <Link href={`/code-of-conduct`} className='invert'>
                  {t('footer.codeOfConduct')}
                </Link>
              </li>
              <li>
                <Link href={`/guides#coaching-guidelines`} className='invert'>
                  {t('footer.coachingGuidelines')}
                </Link>
              </li>
              <li>
                <Link href={`/guides`} className='invert'>
                  {t('footer.guides')}
                </Link>
              </li>
              <li>
                <Link href={`/imprint`} className='invert'>
                  {t('footer.imprint')}
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container justifyContent='center'>
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

        h4 {
          color: #fff;
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
