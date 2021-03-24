import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo2.png';
import './Header.css';

function Header({user}) {
  return (
    <>
      {user !== "none" && (
        <header className="header">
          <img
            src={logo}
            alt="Irene logo with green olive branches and two purple heart outlines"
            className="logo"
          />
          <div className="next-bar">
            <h2 className="welcome-name">Welcome Sharon!</h2>
            <Link to="/">
              <button className="logout-button">Log Out</button>
            </Link>
          </div>
        </header>
      )}
      {user === "none" && (
        <header>
          <img
            src={logo}
            alt="Irene logo with green olive branches and two purple heart outlines"
            className="logo"
          />
        </header>
      )}
    </>
  );
}

export default Header