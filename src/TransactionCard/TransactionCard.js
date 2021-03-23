import React from 'react';

function TransactionCard({transaction}) {
  return(
    <article>
      <p>{transaction.date_time_calc}</p>
      <p>{transaction.beneficiary}</p>
      <p>{transaction.amount}</p>
      <p>{transaction.balance}</p>
    </article>
  )
}

export default TransactionCard