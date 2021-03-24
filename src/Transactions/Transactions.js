import React from 'react';
import TransactionCard from "../TransactionCard/TransactionCard.js";
import './Transactions.css'

function Transactions({ data }) {
    const mappedResults = data.map(dataPoint => {
      return (
        <TransactionCard transaction={dataPoint} /> 
      )
    })

  return (
    <article className="transactions">
      {mappedResults.length > 0 &&
      <>
        <h3>Transactions</h3>
        {mappedResults}
      </>
      }
    </article>
  )
}

export default Transactions;