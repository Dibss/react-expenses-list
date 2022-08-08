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

  return (
    <Card className="expenses">
      <ExpensesFilter
        preSelectedYear={filteredYear}
        onSelectedYear={filterYear}
      />
      {props.items.map((item) => (
        <ExpenseItem 
          title={item.title} 
          amount={item.amount} 
          date={item.date}
          key={item.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
