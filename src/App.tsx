import React from "react";
import "./App.css";
import Header from "./components/Header.component";
import Balance from "./components/Balance.component";
import IncomeExpenses from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

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
