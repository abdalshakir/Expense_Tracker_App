import React from 'react';
import './App.css';

// Import Components
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <div className="main">
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    </div>

  );
}

export default App;
