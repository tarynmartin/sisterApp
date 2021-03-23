import React from 'react';
import { Link } from "react-router-dom";

function Header({user}) {
  return (
    <>
      {user !== "none" && (
        <header>
          <h1>Irene</h1>
          <h2>Welcome Sharon!</h2>
          <Link to="/">
            <button>Log Out</button>
          </Link>
        </header>
      )}
      {user === "none" && (
        <header>
          <h1>Irene</h1>
        </header>
      )}
    </>
  );
}

export default Header