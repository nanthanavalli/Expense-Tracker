import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "car insurance", amount: 230, date: new Date(2024, 8, 26) },
    { title: "Food", amount: 150, date: new Date(2024, 8, 20) },
    { title: "Clothes", amount: 280, date: new Date(2024, 8, 24) },
  ];
  return (
    <div>
      <h2>
        <ExpenseItem expense={expenses[0]}></ExpenseItem>
        <ExpenseItem expense={expenses[1]}></ExpenseItem>
        <ExpenseItem expense={expenses[2]}></ExpenseItem>
      </h2>
    </div>
  );
}

export default App;
