import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Signup.css';

function Signup({setUser}) {
  const [idType, setType] = useState(null);

  let setIDType = (event) => {
    setType(event.target.value);
  }
  return (
    <article className="signup">
      <h2>Sign Up</h2>
      <input type="text" placeholder="First Name" onChange={(e) => setUser(e.target.value)}></input>
      <input type="text" placeholder="Last Name"></input>
      <input type="email" placeholder="Your Email" id="email"></input>
      <label htmlFor="dob" className="dob-label">Date of Birth</label>
      <input type="date" id="dob"></input>
      <select className="dropdown" onChange={setIDType}>
        <option>Select ID Type</option>
        <option value="ssn">SSN/EIN</option>
        <option value="passport">Passport</option>
        <option value="id">License/ID</option>
      </select>
      {idType === "ssn" && (
        <input type="number" placeholder="111-22-3333"></input>
      )}
      {idType === "id" && (
        <button className="id-button">
          Click here for facial recognition of your ID
        </button>
      )}
      {idType === "passport" && (
        <button className="passport-button">
          Click here for facial recognition of your passport
        </button>
      )}
      <Link to={"/address"}>
        <button className="address-verification-button">Address Verification</button>
      </Link>
    </article>
  );
}

export default Signup;
