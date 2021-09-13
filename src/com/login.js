import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  );
}
