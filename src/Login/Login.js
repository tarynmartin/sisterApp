import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <article className="login">
      <input type="email" placeholder="Email" className="login-input"></input>
      <input type="password" placeholder="Password" className="login-input"></input>
      <Link to={"/main"}>
        <input type="submit" className="login-button"></input>
      </Link>
    </article>
  );
}

export default Login;
