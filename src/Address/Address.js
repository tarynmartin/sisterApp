import React from "react";
import { Link } from "react-router-dom";

function Address() {
  return (
    <article>
      <h1>How Would You Like to Verify Your Address?</h1>
      <Link to={"/mail"}>
        <button>Bill/Mail</button>
      </Link>
      <Link to={"/geolocation"}>
        <button>Use Geolocation</button>
      </Link>
    </article>
  );
}

export default Address;
