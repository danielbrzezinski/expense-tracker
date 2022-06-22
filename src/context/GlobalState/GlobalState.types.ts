import { ReactNode } from 'react';
import { TransactionType } from "../../components/Transaction/Transaction.types";

export type AppContextInitialState = {
    transactions: TransactionType[] | [];
    deleteTransaction?: Function;
    addTransaction?: Function;
  };
  
export type ContextProps = {
    children: ReactNode;
  };
  