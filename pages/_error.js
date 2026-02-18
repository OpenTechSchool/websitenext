import PageLayout from '../components/PageLayout/PageLayout'
import useTranslation from '../hooks/useTranslation'
import WithLocale from '../containers/withLocale'
import { getAssetPath } from '../utils/assetPath'

function ErrorPage() {
  const { t } = useTranslation()

  return (
    <PageLayout pageTitle={t('404.pageTitle')} pageDescription={''}>
      <div className='error'>
        {t('404.description')}
        <br />
        <b>{t('404.description2')}</b>
        <img
          src={getAssetPath('/illustrations/lost.svg')}
          width='300'
          alt='lost'
        />
      </div>
      <style jsx>
        {`
          .error {
            background-color: var(--otsColor);
            text-align: center;
            color: white;
            padding: 120px;
            line-height: 40px;
          }
          .error img {
            margin: 50px auto;
          }
        `}
      </style>
    </PageLayout>
  )
}

ErrorPage.propTypes = {}

export default WithLocale(ErrorPage)
