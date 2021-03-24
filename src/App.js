import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import Header from './Header/Header.js';
import DonationBar from './DonationBar/DonationBar.js';
import Transactions from './Transactions/Transactions.js';
import LandingPage from './LandingPage/LandingPage.js';
import Login from './Login/Login.js';
import Welcome from './Welcome/Welcome.js';
import Signup from './Signup/Signup.js';
import Address from './Address/Address.js';
import Mail from './Mail/Mail.js';
import Geolocation from './Geolocation/Geolocation.js';
import MoreInfo from './MoreInfo/MoreInfo.js';
import SpendingInfo from './SpendingInfo/SpendingInfo.js'
import Results from './Results/Results.js';
import './App.css';

function App() {
  const [results, setResults] = useState([])
  const [user, setUser] = useState("Jane")
  const [donated, setDonation] = useState(0)
  const [answer, setAnswer] = useState(null)

    // /more-info - check wireframes
    // /spending-info
    // /results w/button to home screen

  return (
    <div className="App">
      {user && (
        <Route
          exact
          path="/main"
          render={() => {
            return (
              <>
                <Header user={user} />
                <DonationBar donated={donated}/>
                <Transactions donated={donated} setDonation={setDonation} />
              </>
            );
          }}
        />
      )}
      <Route
        exact
        path="/results"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <Results />
            </>
          );
        }}
      />
      <Route
        exact
        path="/spending-info"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <SpendingInfo setAnswer={setAnswer}/>
            </>
          );
        }}
      />
      <Route
        exact
        path="/more-info"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <MoreInfo />
            </>
          );
        }}
      />
      <Route
        exact
        path="/mail"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <Mail />
            </>
          );
        }}
      />
      <Route
        exact
        path="/geolocation"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <Geolocation />
            </>
          );
        }}
      />
      <Route
        exact
        path="/address"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <Address />
            </>
          );
        }}
      />
      <Route
        exact
        path="/signup"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <Signup setUser={setUser}/>
            </>
          );
        }}
      />
      <Route
        exact
        path="/welcome"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <Welcome />
            </>
          );
        }}
      />
      <Route
        exact
        path="/login"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <Login />
            </>
          );
        }}
      />
      <Route
        exact
        path="/"
        render={() => {
          return (
            <>
              <Header user={"none"} />
              <LandingPage />
            </>
          );
        }}
      />
    </div>
  );
}

export default App;
