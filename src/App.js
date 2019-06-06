import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import MonthlyBudget from './budget/MonthlyBudget';
import DailyBudget from './daily/DailyBudget';
import Expenses from './expense/Expenses';
import Home from "./home/Home";
import Chart from "./statistics/Chart";
import RegretExpense from "./regret/RegretExpense";
import RegretHigh from "./regret/RegretHigh";
import RegretMedium from "./regret/RegretMedium";
import RegretLow from "./regret/RegretLow";


class App extends Component {
  render() {

    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/budget" exact component={MonthlyBudget} />
        <Route path="/daily" exact component={DailyBudget} />
        <Route path="/expense" exact component={Expenses} />
        <Route path="/statistics" exact component={Chart} />
        
        <Route path="/regret" exact component={RegretExpense} />
        <Route path="/regret/regretHigh" exact component={RegretHigh} />
        <Route path="/regret/regretMedium" exact component={RegretMedium} />
        <Route path="/regret/regretLow" exact component={RegretLow} />
      </div>
    );
  }
}

export default withRouter(App);