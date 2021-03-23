import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <article>
      <input type="email" placeholder="tom@gmail.com"></input>
      <input type="password"></input>
      <Link to={"/main"}>
        <input type="submit"></input>
      </Link>
    </article>
  );
}

export default Login;
