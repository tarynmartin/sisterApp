import React from "react";
import { Link } from "react-router-dom";

function Mail() {
  return (
    <article>
      <h1>Click the Button to Upload an Image of the Correct Document Type:</h1>
      <button>Upload Image</button>
      <Link to={"/main"}>
        <button>Finish Sign Up</button>
      </Link>
    </article>
  );
}

export default Mail;
