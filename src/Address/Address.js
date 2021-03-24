import React from "react";
import { Link } from "react-router-dom";
import './Address.css'

function Address() {
  return (
    <article className="address">
      <h1>How Would You Like to Verify Your Address?</h1>
      <Link to={"/mail"}>
        <button className="button">Bill/Mail</button>
      </Link>
      <Link to={"/geolocation"}>
        <button className="button">Use Geolocation</button>
      </Link>
    </article>
  );
}

export default Address;
