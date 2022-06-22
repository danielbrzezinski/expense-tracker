import React, {
  createContext,
  useReducer,
  FunctionComponent,
} from "react";
import AppReducer from "../AppReducer/AppReducer";
import { TransactionType } from '../../components/Transaction/Transaction.types';
import { AppContextInitialState, ContextProps } from './GlobalState.types';

// Initial state
const initialState = {
  transactions: [],
  /*
  transactions: [
    { id: 1, text: "Book", amount: -20 },
    { id: 2, text: "Salary", amount: 500 },
    { id: 3, text: "Food", amount: -30 },
    { id: 4, text: "Stocks", amount: 150 },
  ],
  */
};

// create context with the initial state
export const GlobalContext = createContext<AppContextInitialState>(initialState);
// provider component
export const GlobalProvider: FunctionComponent<ContextProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number): void {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction: TransactionType): void {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }
 
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
