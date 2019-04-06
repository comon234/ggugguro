import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AttachMoney from '@material-ui/icons/AttachMoney';
import DoneOutline from '@material-ui/icons/DoneOutline';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BudgetForm from './budget/BudgetForm';
import DailyBudget from './daily/DailyBudget';
import ExpenseForm from './components/ExpenseForm'
import { withRouter } from "react-router-dom";
import Expenses from './components/Expenses';

class App extends Component {


  handleChange = (event, value) => {
    this.props.history.push(value);
  };

  render() {
    return (
      <div className="App">
        <nav>
          <Tabs
            value={this.props.history.location.pathname}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab icon={<AttachMoney />} label="오늘의 예산" value="/" />
            <Tab icon={<AccountBalanceWallet />} label="예산 작성" value="/budget"/>
            <Tab icon={<DoneOutline />} label="지출 작성" value="/expense" />
          </Tabs>
        </nav>
      
        <Route path="/budget" exact component={BudgetForm} />
        <Route path="/" exact component={DailyBudget} />
        <Route path="/expense" exact component={Expenses} />

      </div>
    );
  }
}

export default withRouter(App);
