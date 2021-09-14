import React, { useState } from "react";

// import "./login.css";
export default function Login() {
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
        {state.wrongpassword && "signup"}
        <input
          value={state.id}
          type="text"
          id="login"
          className="fadeIn second"
          name="id"
          placeholder="signup"
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
          value="signup"
          onClick={() => {
            let users = JSON.parse(localStorage.getItem("users")) ?? [
              {
                id: "admin",
                password: "admin",
              },
            ];
            localStorage.setItem(
              "users",
              JSON.stringify([
                ...users,
                { id: state.id, password: state.password },
              ])
            );
            setState({ ...state, wrongpassword: true });
          }}
        />
      </div>
    </div>
  );
}
