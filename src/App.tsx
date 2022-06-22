import React from "react";
import "./App.css";
import { Header} from "./components/Header/Header.component";
import { Balance } from "./components/Balance/Balance.component";
import { IncomeExpenses } from "./components/IncomeExpenses/IncomeExpenses";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";

// Our Context Provider
import { GlobalProvider } from "./context/GlobalState/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <>
        <Header />
        <div className='container'>
          <Balance />
        </div>
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </>
    </GlobalProvider>
  );
}

export default App;