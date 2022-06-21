import React, {
  createContext,
  ReactComponentElement,
  useReducer,
  FunctionComponent,
  ReactNode,
} from "react";
import AppReducer from "./AppReducer";

type transaction = {
  id: number;
  text: string;
  amount: number;
};

type AppContextInitialState = {
  transactions: transaction[]
  deleteTransaction?: Function,
  addTransaction?: Function,
};

type ContextProps = {
  children: ReactNode;
};

type TransactionType = {
    id: number,
    name: string,
    amount: number
};

// Intial state
const initialState = {
  transactions: [
    { id: 1, text: "Book", amount: -20 },
    { id: 2, text: "Salary", amount: 500 },
    { id: 3, text: "Food", amount: -30 },
    { id: 4, text: "Stocks", amount: 150 },
  ],
};

// create context with the inital state
export const GlobalContext =
  createContext<AppContextInitialState>(initialState);

// provider component
export const GlobalProvider: FunctionComponent<ContextProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function deleteTransaction(id: number) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction: TransactionType) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        // @ts-ignore
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
