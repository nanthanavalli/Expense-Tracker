import ExpenseItem from "./ExpenseItem";


const Expenses = (props) =>{
    return(
    <h2>
        <ExpenseItem expense={props.items[0]}></ExpenseItem>
        <ExpenseItem expense={props.items[1]}></ExpenseItem>
        <ExpenseItem expense={props.items[2]}></ExpenseItem>
      </h2>
    );
}

export default Expenses;