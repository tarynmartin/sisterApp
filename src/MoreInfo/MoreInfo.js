import React from "react";
import { Link } from "react-router-dom";
import './MoreInfo.css';

function MoreInfo() {
  return (
    <article className="more-info">
      <h1 className="more-info-title">Welcome to Irene!</h1>
      <p className="more-info-description">We believe in helping you achieve financial peace. In the next few screens we will be getting to know you, your goals, and begin to create your financial profile.</p>
      <br />
      <p className="more-info-description">Your responses are confidential an ONLY used to help match you with vetted services that Irene offers. </p>
      <br />
      <p className="more-info-description">Glad you’re here!</p>
      <p className="more-info-last"> - Irene</p>
      <Link to={"/spending-info"} className="link">
        <button className="step-button">Next Step</button>
      </Link>
    </article>
  );
}

export default MoreInfo;
