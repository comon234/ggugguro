import React, {Component} from 'react';
import {getCategories} from "../storage/categories";
import {Calendar} from "react-calendar";
import {startOfToday} from "date-fns"
import {addExpense} from "../storage/expense";

class ExpenseForm extends Component {
  state = {
    amount: 0,
    category: null,
    date: startOfToday(new Date())
  };

  setExpenseInput = (e) => {
    this.setState({
      amount: Number(e.target.value)
    })
  };

  setDateChange = (date) => {
    return this.setState({date});
  };

  setCategory = (e) => {
    if (!e.target.value) {
      return;
    }

    this.setState({
      category: e.target.value
    })
  };

  handleSubmit = () => {
    addExpense(this.state);
    alert("추가되었습니다.");
    window.location.reload();
  };

  render() {
    const {
      amount
    } = this.state;
    const categories = getCategories()
    return (
      <div>
        <h3>지출 추가</h3>
        <input
          type="number"
          value={amount}
          onChange={this.setExpenseInput}
        />
        <select onChange={this.setCategory}>
          <option value=''>-- 선택 --</option>
          {categories.map(({category}, i) => (
            <option key={i} value={category}>{category}</option>
          ))}
        </select>
        <Calendar
          onChange={this.setDateChange}
          value={this.state.date}
        />
        <button
          onClick={this.handleSubmit}
        >
          추가
        </button>

      </div>
    );
  }
}

export default ExpenseForm;