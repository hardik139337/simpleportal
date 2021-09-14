import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from '../utils';
/* eslint-disable react/prop-types */

let isLogin = () => {
    
  return true;
};

// import React from "react";

export default function Islogin(props) {
  return isLogin() ? props.children : <Redirect to="/login" />;
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
