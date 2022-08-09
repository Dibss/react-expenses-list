import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./css/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterYear = (selectedYear) => {
    console.log("in Expenses:", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredList = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses found</p>;

  if(filteredList.length > 0){
    expensesContent = filteredList.map((item) => (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={item.id}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        preSelectedYear={filteredYear}
        onSelectedYear={filterYear}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
