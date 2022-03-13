import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 252, date: new Date() },
    { id: 2, title: "Water", amount: 15, date: new Date() },
    { id: 3, title: "Lightning", amount: 50, date: new Date() },
  ];
  const [allExpenses, setAllExpenses] = useState(expenses);

  const expenseAdded = (newExpense) => {
    setAllExpenses((previousState) => {
      const convertedExpense = {
        id: newExpense.id,
        title: newExpense.enteredTitle,
        amount: newExpense.enteredAmount,
        date: new Date(newExpense.enteredDate)
      }
      return [...previousState, convertedExpense];
    });
  };
  return (
    <div>
      <NewExpense onExpenseAdded={expenseAdded} />
      <Expenses items={allExpenses} />
    </div>
  );
};

export default App;
