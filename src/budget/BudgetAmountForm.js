import React, {Component} from 'react';
import {getBudget, setBudget} from "../storage/budget";

class BudgetAmountForm extends Component {
  state = {
    budget: getBudget(this.props.date)
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
    const {
      date
    } = this.props;
    setBudget(date, budget)
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
          value={budget || 0}
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

export default BudgetAmountForm;