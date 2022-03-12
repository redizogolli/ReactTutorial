import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  // const [enteredTitle,setEnteredTitle] = useState('');
  // const [enteredAmount,setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    entereDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChangedHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   entereDate: event.target.value,
    // });
    setUserInput((previousState) => {
      return {
        ...previousState,
        entereDate: event.target.value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(userInput));
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      entereDate: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.entereDate}
            onChange={dateChangedHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
