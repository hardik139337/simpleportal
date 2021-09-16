import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function i18n() {
  const [l, setL] = useState(true);
  const { t, i18n } = useTranslation();

  return (
    <div className='m-4'>
      <Trans>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h5>{t('Welcome to React')}</h5>
          <button
            onClick={() => {
              i18n.changeLanguage(l ? 'gujarati' : 'en');
              setL(!l);
            }}
          >
            {l ? 'gujarati' : 'english'}
          </button>
        </div>
      </Trans>
    </div>
  );
}
