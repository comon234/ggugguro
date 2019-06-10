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
import a from "./statistics/a";
import b from "./statistics/b";
import c from "./statistics/c";
import d from "./statistics/d";
import e from "./statistics/e";

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

        <Route path="/statistics/a" exact component={a} />
        <Route path="/statistics/b" exact component={b} />
        <Route path="/statistics/c" exact component={c} />
        <Route path="/statistics/d" exact component={d} />
        <Route path="/statistics/e" exact component={e} />        
      </div>
    );
  }
}

export default withRouter(App);
