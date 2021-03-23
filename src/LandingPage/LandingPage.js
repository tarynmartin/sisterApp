import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <article>
      <h1>Welcome to Irene!</h1>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to="/welcome">
        <button>Create Account</button>
      </Link>
    </article>
  );
}

export default LandingPage;
