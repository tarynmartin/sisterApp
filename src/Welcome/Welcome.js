import React from "react";
import { Link } from "react-router-dom";
import './Welcome.css';

function Welcome() {
  return (
    <article className="welcome">
      <h1 className="welcome-title">Welcome!</h1>
      <p className="welcome-description">We're glad to have you.</p>
      <Link to={"/signup"}>
        <button className="welcome-button">Get Started!</button>
      </Link>
    </article>
  );
}

export default Welcome;
