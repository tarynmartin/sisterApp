import React from "react";
import { Link } from "react-router-dom";
import './Address.css'

function Address() {
  return (
    <article className="address">
      <h1 className="address-title">How Would You Like to Verify Your Address?</h1>
      <Link to={"/mail"}>
        <button className="bill-button">Bill/Mail</button>
      </Link>
      <Link to={"/geolocation"}>
        <button className="geo-button">Use Geolocation</button>
      </Link>
    </article>
  );
}

export default Address;
