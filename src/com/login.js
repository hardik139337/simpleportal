import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// import "./login.css";
export default function Login({ setIslogin }) {
  const history = useHistory();
  let { t } = useTranslation();
  const [state, setState] = useState({
    id: '',
    password: '',
    wrongpassword: false,
  });
  let myChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className='wrapper fadeInDown'>
      <div id='formContent'>
        {state.wrongpassword && 'wrongpassword'}
        <input
          value={state.id}
          type='text'
          id='login'
          className='fadeIn second'
          name='id'
          placeholder='login'
          onChange={myChangeHandler}
        />
        <input
          value={state.password}
          type='text'
          id='password'
          className='fadeIn third'
          name='password'
          placeholder='password'
          onChange={myChangeHandler}
        />
        <input
          type='submit'
          className='fadeIn fourth'
          value={t('Login')}
          onClick={() => {
            let users = JSON.parse(localStorage.getItem('users'));
            let tempuser = users
              ? users.filter((u) => u.id == state.id)[0]
              : { id: '', password: '' };
            // console.log(tempuser);
            if (
              state.id === tempuser.id &&
              state.password === tempuser.password
            ) {
              // console.log("true");
              localStorage.setItem('islogin', 'true');
              setIslogin(true);

              history.push(`/dashboard`);
            } else setState({ ...state, wrongpassword: true });
          }}
        />
      </div>
    </div>
  );
}

Login.propTypes = {
  islogin: PropTypes.bool,
  setIslogin: PropTypes.func,
};
