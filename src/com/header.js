import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header({ islogin, setIslogin }) {
  let { t } = useTranslation();
  return (
    <div>
      <header style={{ display: 'flex' }}>
        <Link className='btn ' to='/'>
          {t('simple portal')}
        </Link>
        <Link className='btn ' to='/dashboard'>
          {t('dashboard ')}
        </Link>
        <Link className='btn ' to='/edit'>
          {t('add ')}
        </Link>
        <div style={{ marginLeft: 'auto' }}>
          {!islogin ? (
            <>
              {' '}
              <Link to='login' className='btn '>
                {t('Login ')}{' '}
              </Link>
              <Link to='signup' className='btn '>
                {t('Signup ')}
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem('islogin');
                setIslogin(false);
              }}
            >
              {t('sine out')}
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  islogin: PropTypes.bool,
  setIslogin: PropTypes.func,
};

export default Header;
