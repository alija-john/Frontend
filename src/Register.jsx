import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="register-container">
      <div>
        <div className="mainlogo">
          <img src="./images/mainlogo.png" alt="" />
        </div>
        <div className="namelogo">
          <img src="./images/namelogo.png" alt="" />
        </div>
      </div>

      <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-inputs">
            <label htmlFor="name">Name</label>
            <input value={name} name="name" id="name" placeholder="" />
          </div>
          <div className="register-inputs">
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
          <div className="register-inputs">
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
          <div className="register-inputs">
            <label htmlFor="password">Confirm Password </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder=""
              id="password"
              name="password"
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="link-btn" onClick={() => props.onFormSwitch("login")}>
          Already have an account. Go to Account..
        </div>
      </div>
    </div>
  );
};
