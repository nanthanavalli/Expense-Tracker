import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: ' ',
  //   enteredAmount:' ',
  //   enteredDate: ' '
  // });

  // const titleChangeHandler = (event) =>{
  //    setEnteredTitle(event.target.value);
  // setUserInput((prevState)=>{
  //   return {...prevState, enteredTitle: event.target.value};
  // })
  // };

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // setUserInput((prevState)=>{
  //   return {...prevState, enteredAmount: event.target.value};
  // })
  // };

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // setUserInput((prevState)=>{
  //   return {...prevState, enteredDate: event.target.value};
  // })
  // };

  const userInputHandler = (identifier, value) => {
    if (identifier === "title") setEnteredTitle(value);
    else if (identifier === "amount") setEnteredAmount(value);
    else setEnteredDate(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => userInputHandler("title", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) => userInputHandler("amount", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={(event) => userInputHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
