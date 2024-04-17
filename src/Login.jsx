import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="login-container">
      <div>
        <div className="mainlogo">
          <img src="./images/mainlogo.png" alt="" />
        </div>
        <div className="namelogo">
          <img src="./images/namelogo.png" alt="" />
        </div>
      </div>

      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-inputs">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder=""
              id="email"
              name="email"
            />
          </div>
          <div className="login-inputs ">
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder=""
              id="password"
              name="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          {" "}
          Don't have an account? Register here.
        </div>
      </div>
    </div>
  );
};
