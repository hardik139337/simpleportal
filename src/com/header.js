import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ islogin, setIslogin }) {
  return (
    <div>
      <header style={{ display: 'flex' }}>
        <Link className='btn ' to='/'>
          simple portal
        </Link>
        <Link className='btn ' to='/dashboard'>
          dashboard
        </Link>
        <Link className='btn ' to='/edit'>
          add
        </Link>
        <div style={{ marginLeft: 'auto' }}>
          {!islogin ? (
            <>
              {' '}
              <Link to='login' className='btn '>
                Login{' '}
              </Link>
              <Link to='signup' className='btn '>
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem('islogin');
                setIslogin(false);
              }}
            >
              sine out
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
