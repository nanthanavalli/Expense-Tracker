import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "car insurance", amount: 230, date: new Date(2024, 8, 26) },
    { title: "Food", amount: 150, date: new Date(2024, 8, 20) },
    { title: "Clothes", amount: 280, date: new Date(2024, 8, 24) },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
