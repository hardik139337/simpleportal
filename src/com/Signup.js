import React from "react";
export default function Signup() {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="Signup"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Signup" />
        </form>
      </div>
    </div>
  );
}
