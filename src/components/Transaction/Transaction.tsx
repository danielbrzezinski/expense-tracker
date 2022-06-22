import React, { FunctionComponent, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState/GlobalState";
import { TransactionType } from './Transaction.types';

type TransactionProps = {
  transaction: TransactionType;
};

const Transaction: FunctionComponent<TransactionProps> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const transactionClass = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={transactionClass}>
      {transaction.text}{" "}
      <span>
        {sign}
        {Math.abs(transaction.amount)}
      </span>
      <button
        className='delete-btn'
        onClick={() => {
          if (typeof deleteTransaction === "function") {
            deleteTransaction(transaction.id);
          }
        }}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
