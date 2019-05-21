import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import MonthlyBudget from './budget/MonthlyBudget';
import DailyBudget from './daily/DailyBudget';
import Expenses from './expense/Expenses';
import Home from "./home/Home";

class App extends Component {
  handleChange = (event, value) => {
    this.props.history.push(value);
  };

  render() {

    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/budget" exact component={MonthlyBudget} />
        <Route path="/daily" exact component={DailyBudget} />
        <Route path="/expense" exact component={Expenses} />

      </div>
    );
  }
}

export default withRouter(App);
