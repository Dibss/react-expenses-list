import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
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

  return (
    <Card className="expenses">
      <ExpensesFilter
        preSelectedYear={filteredYear}
        onSelectedYear={filterYear}
      />
      <ExpensesList items={filteredList}/>
    </Card>
  );
};

export default Expenses;
