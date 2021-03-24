import React from "react";
import { Link } from "react-router-dom";

function Mail() {
  return (
    <article className="mail">
      <h1>Click the Button to Upload an Image of the Correct Document Type:</h1>
      <button className="button">Upload Image</button>
      <Link to={"/more-info"}>
        <button className="button">Next Step</button>
      </Link>
    </article>
  );
}

export default Mail;
