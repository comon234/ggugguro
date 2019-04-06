import React, {Component} from 'react';
import {getExpenses} from "../storage/expense";
import ExpensesForm from "./ExpenseForm";

class Expenses extends Component {
  render() {
    const expenses = getExpenses();

    return (
      <div>
        <ExpensesForm/>
        {Object.keys(expenses).map(key => {
          return expenses[key].map(({date, amount}, i) => (
            <div key={i}>
              {key}: {amount} ({date})
            </div>
          ))
        })}
      </div>
    );
  }
}

export default Expenses;