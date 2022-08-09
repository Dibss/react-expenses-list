import ExpenseItem from "./ExpenseItem";
import "./css/ExpensesList.css";

const ExpensesList = (props) => {

  let expensesContent = <p className="expenses-list__fallback">No expenses found</p>;

  if(props.items.length > 0){
    expensesContent = props.items.map((item) => (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={item.id}
      />
    ))
  }

  return (
    <ul className="expenses-list">
      {expensesContent}
    </ul>
  )
}

export default ExpensesList;