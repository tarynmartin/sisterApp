import React from 'react';
import TransactionCard from "../TransactionCard/TransactionCard.js";
import './Transactions.css'
import data from '../assets/output.json'

function Transactions({donated, setDonation}) {
  const newArray = Object.keys(data)
  let donations = 0;

  const mappedResults = newArray.map((dataPoint, index) => {
    // add data[dataPoint].total_rounded_so_far to what's already there in state
    donations += data[dataPoint].total_rounded_so_far
    return (
      <TransactionCard key={index} index={index} transaction={data[dataPoint].txn_info} rounded={data[dataPoint].total_rounded_so_far}/>
    )
  })

  setDonation(donations)

  return (
    <article className="transactions">
      {mappedResults.length > 0 &&
      <>
        <h3 className="transactions-title">Transactions</h3>
        <div className="headers">
          <h4>Transaction Number</h4>
          <h4>Transaction Amount</h4>
        </div>
        <div className="all-transactions">
          {mappedResults}
        </div>
      </>
      }
    </article>
  )
}

export default Transactions;
