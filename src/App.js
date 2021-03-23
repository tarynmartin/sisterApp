import React, { useEffect, useState } from "react";
import Transactions from './Transactions/Transactions.js';
import './App.css';

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("sandpit-key", "53840511-4749-4367-8246-14e9bf9aee3c");
    myHeaders.append("Accept-Profile", "api");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://data.fintechsandpit.com/WEETS_financial_BankingTransJoanneMiles", requestOptions)
      .then(response => response.json())
      .then(result => {
        setResults(result)
      })
      .catch(error => console.log('error', error)); 
  }, [])

  return (
    <div className="App">
      {results.length > 0 &&
      <Transactions data={results} />
      }
      {results.length === 0 && 
        <h1>Hello World!</h1>
      }
    </div>
  );
}

export default App;
