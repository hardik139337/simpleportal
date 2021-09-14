import PropTypes from "prop-types";
import React from "react";
import { Redirect } from "react-router-dom";

let isLogin = () => {
  console.log("islogin");
  let temp = localStorage.getItem("islogin");
  console.log(temp);
  if (temp == "true") return true;
  else return false;
};

export default function Islogin(props) {
  return isLogin() ? props.children : <Redirect to="/login" />;
}

Islogin.propTypes = {
  children: PropTypes.element,
};
