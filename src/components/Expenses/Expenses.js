import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
const Expenses = () => {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 252, date: new Date() },
    { id: 2, title: "Water", amount: 15, date: new Date() },
    { id: 3, title: "Lightning", amount: 50, date: new Date() },
  ];
  return (
    <div className="expenses">
      {expenses.map((expense, i) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
