import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 252, date: new Date() },
    { id: 2, title: "Water", amount: 15, date: new Date() },
    { id: 3, title: "Lightning", amount: 50, date: new Date() },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
