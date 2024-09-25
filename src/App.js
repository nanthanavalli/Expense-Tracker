import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyData = [
  { id:"e1", title: "car insurance", amount: 230, date: new Date(2024, 8, 26) },
  { id:"e2", title: "Food", amount: 150, date: new Date(2024, 8, 20) },
  { id:"e3", title: "Clothes", amount: 280, date: new Date(2024, 8, 24) },
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
