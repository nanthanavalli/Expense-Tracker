import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";


const Expenses = (props) =>{

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
    return(
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem expense={props.items[0]}></ExpenseItem>
        <ExpenseItem expense={props.items[1]}></ExpenseItem>
        <ExpenseItem expense={props.items[2]}></ExpenseItem>
      </Card>  
    </div>
    );
}

export default Expenses;