import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  let dummyExpenses = [
    { id: 1, title: "Car Insurance", amount: 252, date: new Date() },
    { id: 2, title: "Water", amount: 15, date: new Date() },
    { id: 3, title: "Lightning", amount: 50, date: new Date() },
  ];
  const intitDate = new Date().getFullYear();
  let year = intitDate;
  const [expensesInfo, setExpensesInfo] = useState({
    expenses: dummyExpenses,
    dateFiltered: [
      ...dummyExpenses.filter((x) => x.date.getFullYear() === intitDate),
    ],
  });

  const expenseAdded = (newExpense) => {
    setExpensesInfo((previousState) => {
      const convertedExpense = {
        id: newExpense.id,
        title: newExpense.enteredTitle,
        amount: newExpense.enteredAmount,
        date: new Date(newExpense.enteredDate),
      };
      return {
        expenses: [convertedExpense, ...previousState.expenses],
        dateFiltered: previousState.expenses.filter(
          (x) => x.date.getFullYear() === year
        ),
      };
    });
  };
  const dateFilterChanged = (selectedYear) => {
    year = parseInt(selectedYear);
    setExpensesInfo((previousState) => {
      return {
        expenses: [...previousState.expenses],
        dateFiltered: previousState.expenses.filter(
          (x) => x.date.getFullYear() === year
        ),
      };
    });
  };
  return (
    <div>
      <NewExpense onExpenseAdded={expenseAdded} />
      <Expenses
        onDateFilterChanged={dateFilterChanged}
        items={expensesInfo.dateFiltered}
      />
    </div>
  );
};

export default App;
