import React from "react";
import { Link } from "react-router-dom";
import './Geolocation.css';

function Geolocation() {
  return (
    <article className="geolocation">
      <h1>Click the Button to Use Geolocation to Verify Address</h1>
      <button className="button" id="shift">Find My Address</button>
      <Link to={"/more-info"}>
        <button className="button">Next Step</button>
      </Link>
    </article>
  );
}

export default Geolocation;
