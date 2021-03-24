import React from "react";
import { Link } from "react-router-dom";
import './Results.css';

function Results() {
  return (
    <article className="results">
      <h1 className="results-title">Top recommendations  based on your survey results:</h1>
      <ul className="results-description">
        <li>Financial Coaching</li>
        <li>Roundup</li>
        <li>Non-Profit X</li>
      </ul>
      <h2 className="partner-link">Visit our larger <a href="#">partner library</a>.</h2>
      <Link to={"/main"}>
        <button className="final-button">See Your Account!</button>
      </Link>
    </article>
  );
}

export default Results;
