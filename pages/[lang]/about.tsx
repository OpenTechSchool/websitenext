import { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import Grid from '@material-ui/core/Grid'
import TextSection from '../../components/Section/TextSection'
import LocalSwitcher from '../../components/LocalSwitcher/LocalSwitcher'
import Button from '../../components/Button/Button'
import useTranslation from '../../hooks/useTranslation'
import WithLocale from '../../containers/withLocale'
import { Link } from '@material-ui/core'

const About: NextPage = () => {
  const { t } = useTranslation()

  return (
    <PageLayout
      siteTitle='about.siteTitle'
      siteDescription={t('about.siteDescription')}
    >
      <section>
        <LocalSwitcher />
      </section>
      <TextSection classname='default' title={t('about.history.title')}>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={12} md={5}>
            <img src='/about.jpg' />
          </Grid>
          <Grid item xs={12} md={5}>
            <p>{t('about.history.description')}</p>
            <br />
            <p>{t('about.history.description2')}</p>
          </Grid>
        </Grid>
      </TextSection>
      <TextSection classname='pink' title={t('about.explanation.title')}>
        <p>{t('about.explanation.description')}</p>
      </TextSection>
      <TextSection
        classname='highlight'
        title={t('about.coreValue.title')}
        anchor='core-values'
      >
        <p>{t('about.coreValue.description')}</p>

        <h2>{t('about.coreValue.openness.title')}</h2>
        <p>{t('about.coreValue.openness.description')}</p>

        <h2>{t('about.coreValue.empowerment.title')}</h2>
        <p>{t('about.coreValue.empowerment.description')}</p>

        <h2>{t('about.coreValue.handsOn.title')}</h2>
        <p>{t('about.coreValue.handsOn.description')}</p>

        <h2>{t('about.coreValue.welcoming.title')}</h2>
        <p>{t('about.coreValue.welcoming.description')}</p>

        <h2>{t('about.coreValue.transparency.title')}</h2>
        <p>{t('about.coreValue.transparency.description')}</p>

        <h2>{t('about.coreValue.nonProfit.title')}</h2>
        <p>{t('about.coreValue.nonProfit.description')}</p>
      </TextSection>
      <TextSection classname='grey' title={t('about.policy.title')}>
        <p>
          {t('about.policy.description')}
          {` `}
          <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en_US'>
            {t('about.policy.link')}
          </a>
          {` `}
          {t('about.policy.description2')}
        </p>
      </TextSection>
      <TextSection title='Foundation'>
        <h2>OpenTechSchool e.V.</h2>
        <p>{t('about.foundation.description')}</p>
        <h2>{t('about.foundation.details')}</h2>
        <p>
          {t('about.foundation.address')}
          <br />
          OpenTechSchool e.V. <br />
          c/o co.up <br />
          Adalbertstr. 8 <br />
          10999 Berlin <br />
        </p>
        <br />
        <p>
          {t('about.foundation.registered')}{' '}
          <Link href='https://www.opentechschool.org/foundation/archive/Register_Bestaetigung.pdf'>
            Amtsgericht Charlottenburg under VR32310B
          </Link>
          .
        </p>
        <br />
        <p>{t('about.foundation.representedByBoard')}</p>
        <ul>
          <li>Bastian Albers</li>
          <li>Giorgia Sambrotta</li>
          <li>Martin Meyerhoff</li>
        </ul>
        <br />
        {t('about.foundation.contactTheBoard')}{' '}
        <Link href='mailto:foundation.board@opentechschool.org'>
          foundation.board [at] opentechschool.org
        </Link>
        .<h2>{t('about.foundation.membership')}</h2>
        <p>{t('about.foundation.membershipDesc')}</p>
        <p>{t('about.foundation.noMembershipRequired')}</p>
        <br />
        <Button href='https://docs.google.com/a/opentechschool.org/spreadsheet/viewform?formkey=dGYycmhYal9SSW1WRUdQcUhUSk9FYWc6MQ#gid=0'>
          {t('about.foundation.signup')}
        </Button>
        <br />
        <br />
        <p>
          {t('about.foundation.agree')}{' '}
          <Link href='https://www.opentechschool.org/foundation/archive/aktuelle-Satzung.pdf'>
            {t('about.foundation.agree2')}
          </Link>
        </p>
        <h2>{t('about.foundation.donation')}</h2>
        <p>{t('about.foundation.donationDesc')}</p>
        <br />
        <Button href=''>Donate</Button>
      </TextSection>
      <style jsx>{`
        ul {
          list-style: inherit;
          margin-left: 25px;
        }

        li {
          padding-left: 5px;
        }
      `}</style>
    </PageLayout>
  )
}

export default WithLocale(About)
