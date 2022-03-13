import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  let DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const expenseAdded = (newExpense) => {
    setExpenses((prevExpenses) => {
      const convertedExpense = {
        id: newExpense.id,
        title: newExpense.enteredTitle,
        amount: newExpense.enteredAmount,
        date: new Date(newExpense.enteredDate),
      };
      return [convertedExpense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onExpenseAdded={expenseAdded} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
