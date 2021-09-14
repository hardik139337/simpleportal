import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// import "./login.css";
export default function Login() {
  const history = useHistory();

  const [state, setState] = useState({
    id: "",
    password: "",
    wrongpassword: false,
  });
  let myChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {state.wrongpassword && "wrongpassword"}
        <input
          value={state.id}
          type="text"
          id="login"
          className="fadeIn second"
          name="id"
          placeholder="login"
          onChange={myChangeHandler}
        />
        <input
          value={state.password}
          type="text"
          id="password"
          className="fadeIn third"
          name="password"
          placeholder="password"
          onChange={myChangeHandler}
        />
        <input
          type="submit"
          className="fadeIn fourth"
          value="Log In"
          onClick={() => {
            let users = JSON.parse(localStorage.getItem("users"));
            let tempuser = users
              ? users.filter((u) => u.id == state.id)[0]
              : { id: "", password: "" };

            if (
              state.id == tempuser.id &&
              state.password == tempuser.password
            ) {
              localStorage.setItem("islogin", true);
              history.push(`/dashboard`);
            }
            setState({ ...state, wrongpassword: true });
          }}
        />
      </div>
    </div>
  );
}
