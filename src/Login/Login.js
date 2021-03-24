import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <article className="login">
      <input type="email" placeholder="Email"></input>
      <input type="password" placeholder="Password"></input>
      <Link to={"/main"}>
        <input type="submit" className="button"></input>
      </Link>
    </article>
  );
}

export default Login;
