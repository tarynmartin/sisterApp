import React from "react";
import { Link } from "react-router-dom";
import './Welcome.css';

function Welcome() {
  return (
    <article className="welcome">
      <h1 className="welcome-title">Welcome to Irene!</h1>
      <p className="welcome-description">blahhhhhhh</p>
      <Link to={"/signup"}>
        <button className="button">Let's Get Started!</button>
      </Link>
    </article>
  );
}

export default Welcome;
