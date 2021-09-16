import { useTranslation } from 'react-i18next';

export default function Home() {
  let { t } = useTranslation();

  return <div className={`m-5`}>{t('welcome to react')}</div>;
}
