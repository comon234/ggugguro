import React, { Component } from 'react';
import { getCategories } from "../storage/categories";
import { Calendar } from "react-calendar";
import { format, startOfToday } from "date-fns"
import { addExpense } from "../storage/expense";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class ExpenseForm extends Component {
  state = {
    amount: 0,
    category: getCategories().length > 0 && getCategories()[0].category || null,
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
      amount,
      category
    } = this.state;
    const {
      setExpenseAddMode
    } = this.props;
    const categories = getCategories();
    return (
      <React.Fragment>
        <DialogTitle id="form-dialog-title">지출 추가</DialogTitle>
        <DialogContent>
          <Calendar
            onChange={this.setDateChange}
            value={this.state.date}
            view={"month"}
            formatMonthYear={(locale, date) => format(date, 'YYYYMM')}
            prev2Label={null}
            next2Label={null}
          />
            <TextField
              autoFocus
              label="지출 비용(원)"
              type="number"
              value={amount}
              onChange={this.setExpenseInput}
              style={{width: "50%"}}
            />
            <Select
              onChange={this.setCategory}
              value={category || ''}
            >
              {categories.map(({category}, i) => (
                <MenuItem key={i} value={category}>{category}</MenuItem>
              ))}
            </Select>
        </DialogContent>
        <DialogActions>
            
            <Button onClick={this.handleSubmit} color="primary">
              추가
            </Button>
          </DialogActions>
      </React.Fragment>
    );
  }
}

export default ExpenseForm;
