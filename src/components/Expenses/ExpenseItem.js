import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./css/ExpenseItem.css";

const ExpenseItem = props => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;


// EXTRA CODE TO OPTIONALLY INIT TITLE CHANGE
// import React, {useState} from "react";

// firstValue = current state value, secondValue = function to update the first value
// const [title, setTitle] = useState(props.title);

// const clickHandler = () => {
//   setTitle('Updated!');
//   console.log(title)
// }

//<button onClick={clickHandler}>Change title</button>