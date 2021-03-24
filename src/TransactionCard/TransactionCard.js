import React from 'react';
import './TransactionCard.css';

function TransactionCard({index, transaction, rounded}) {

  return(
    <article className="card">
      <p>{`#${index + 1}`}</p>
      <p>{`$${transaction[0].rounded_amount}.00`}</p>
    </article>
  )
}

export default TransactionCard
