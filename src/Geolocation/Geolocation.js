import React from "react";
import { Link } from "react-router-dom";

function Geolocation() {
  return (
    <article>
      <h1>Click the Button to Use Geolocation to Verify Address</h1>
      <button>Find My Address</button>
      <Link to={"/main"}>
        <button>Finish Sign Up</button>
      </Link>
    </article>
  );
}

export default Geolocation;
