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
import './App.css';

function App() {
  const [results, setResults] = useState([])
  let user = "Jane";

  // useEffect(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("sandpit-key", "53840511-4749-4367-8246-14e9bf9aee3c");
  //   myHeaders.append("Accept-Profile", "api");

  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };

  //   fetch("https://data.fintechsandpit.com/WEETS_financial_BankingTransJoanneMiles", requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       setResults(result)
  //     })
  //     .catch(error => console.log('error', error)); 
  // }, [])

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
                <DonationBar />
                <Transactions data={results} />
              </>
            );
          }}
        />
      )}
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
              <Signup />
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
