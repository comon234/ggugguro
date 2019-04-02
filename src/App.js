import React, { Component } from 'react';
import BudgetForm from "./components/BudgetForm";
import CategoryForm from "./components/CategoryForm";
import Categories from "./components/Categories";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          거꾸로 가계부
        </h1>
        <hr/>

        <BudgetForm/>
        <hr/>
        <CategoryForm/>
        <hr/>
        <Categories/>
        <hr/>
        <ExpenseForm/>
        <hr/>
        <Expenses/>

      </div>
    );
  }
}

export default App;
