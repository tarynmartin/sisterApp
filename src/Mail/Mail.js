import React from "react";
import { Link } from "react-router-dom";
import './Mail.css'

function Mail() {
  return (
    <article className="mail">
      <h1 className="mail-title">Click the Button to Upload an Image of the Correct Document Type:</h1>
      <button className="upload-button" id="shift">Upload Image</button>
      <Link to={"/more-info"}>
        <button className="next-button">Next Step</button>
      </Link>
    </article>
  );
}

export default Mail;
