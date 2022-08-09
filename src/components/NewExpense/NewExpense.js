import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./css/NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  const addHandler = () => {
    setIsAdding(true);
  };

  const closeClickHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && <button type="button" onClick={addHandler}>Add new expense</button>}
      {isAdding && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={closeClickHandler}/>}
    </div>
  )
};

export default NewExpense;