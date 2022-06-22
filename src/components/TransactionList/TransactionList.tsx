import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState/GlobalState";
import Transaction from '../Transaction/Transaction';

export const TransactionList = () => {
  // destructuring for the {transactions: [...]}
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id}  />
        ))}
      </ul>
    </>
  );
};