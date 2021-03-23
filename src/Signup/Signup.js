import React, {useState} from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [idType, setType] = useState(null);

  let setIDType = (event) => {
    setType(event.target.value);
  }
  return (
    <article>
      <h2>Sign Up</h2>
      <input type="text" placeholder="First Name"></input>
      <input type="text" placeholder="Last Name"></input>
      <input type="email" placeholder="Your Email"></input>
      <input type="date"></input>
      <select className="dropdown" onChange={setIDType}>
        <option value="ssn">SSN/EIN</option>
        <option value="passport">Passport</option>
        <option value="id">License/ID</option>
      </select>
      {idType === "ssn" && (
        <input type="number" placeholder="111-22-3333"></input>
      )}
      {idType === "id" && (
        <button>Click here for facial recognition of your ID</button>
      )}
      {idType === "passport" && (
        <button>Click here for facial recognition of your passport</button>
      )}
      <Link to={"/address"}>
        <button>Address Verification</button>
      </Link>
    </article>
  );
}

export default Signup;
