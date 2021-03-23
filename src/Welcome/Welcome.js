import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <article>
      <h1>Welcome to Irene!</h1>
      <p>blahhhhhhh</p>
      <Link to={"/signup"}>
        <button>Let's Get Started!</button>
      </Link>
    </article>
  );
}

export default Welcome;
