import React from 'react';
import TransactionCard from "../TransactionCard/TransactionCard.js";

function Transactions({ data }) {
  console.log(typeof data)
  console.log("data", data)
  // const mappedResults = data.map(transaction => {
  //   return (
  //     )
  //   })
    
    const mappedResults = data.map(dataPoint => {
      return (
        <TransactionCard transaction={dataPoint} /> 
      )
    })

  return (
    <article>
      {mappedResults.length > 0 &&
      <>
        {mappedResults}
      </>
      }
    </article>
  )
}

export default Transactions;