import React, {Component} from 'react';
import {getBudget, setBudget} from "../storage/budget";

class BudgetForm extends Component {
  state = {
    budget: getBudget()
  };

  setBudgetInput = (e) => {
    this.setState({
      budget: Number(e.target.value)
    })
  };

  setBudget = () => {
    const {
      budget
    } = this.state;
    setBudget(budget)
    alert("설정되었습니다.");
    window.location.reload();
  };

  render() {
    const {
      budget
    } = this.state;

    return (
      <div>
        예산 가격
        <input
          type="number"
          value={budget}
          onChange={this.setBudgetInput}
        />

        <button
          onClick={this.setBudget}
        >
          변경
        </button>
      </div>
    );
  }
}

export default BudgetForm;