import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'

function LandingPage() {
  return (
    <article className="landing">
      <Link to={"/login"}>
        <button className="button">Login</button>
      </Link>
      <Link to="/welcome">
        <button className="button">Create Account</button>
      </Link>
    </article>
  );
}

export default LandingPage;
