import React from "react";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

function Header() {
  return (
    <div>
      <header style={{ display: "flex" }}>
        <Link className="btn " to="/">
          simple portal
        </Link>
        <Link className="btn " to="/dashboard">
          dashboard
        </Link>
        <Link className="btn " to="/edit">
          add
        </Link>
        <div style={{ marginLeft: "auto" }}>
          <Link to="login" className="btn ">
            Login{" "}
          </Link>
          <Link to="signup" className="btn ">
            Signup
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
