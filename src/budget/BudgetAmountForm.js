import React, { Component } from 'react';
import { getBudget, setBudget } from "../storage/budget";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class BudgetAmountForm extends Component {
  state = {
    budget: getBudget(this.props.date)
  };

  setBudgetInput = (e) => {
    const budget = Number(e.target.value);
    this.setState({
      budget
    })
  };

  setBudget = () => {
    const {
      budget
    } = this.state;
    const {
      date
    } = this.props;
    setBudget(date, budget);
    alert("설정되었습니다.");
    window.location.reload();
  };

  render() {
    const {
      budget
    } = this.state;
    const {
      setEditmode
    } = this.props;

    return (
      <React.Fragment>
        <DialogTitle id="form-dialog-title">예산안 설정</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              label="예산 가격(원)"
              type="number"
              value={budget || 0}
              onChange={this.setBudgetInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={e => setEditmode(false)} color="primary">
              취소
            </Button>
            <Button onClick={this.setBudget} color="primary">
              변경
            </Button>
          </DialogActions>
      </React.Fragment>
    );
  }
}

export default BudgetAmountForm;
