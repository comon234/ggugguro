import React, {Component} from 'react';
import {addCategory} from "../storage/categories";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getBudget } from '../storage/budget';


const budgetDate = new Date();
const budget = getBudget(budgetDate);

class CategoryForm extends Component {
  state = {
    category: '',
    catBudget: 0
  };

  setCategoryInput = (e) => {
    this.setState({
      category: e.target.value
    })
  };

  setCatBudgettInput = (e) => {
    const catBudget = Number(e.target.value);
    if (catBudget > budget) {
      alert("카테고리의 예산은 총 예산을 초과할 수 없습니다.");
      return;
    }
    this.setState({
      catBudget: catBudget
    })
  };

  addCategory = () => {
    const {
      category,
      catBudget
    } = this.state;
    addCategory({category, catBudget});
    this.setState({
      category: '',
      catBudget: 0
    });
    alert("설정되었습니다.");
    window.location.reload();
  };

  render() {
    const {
      category,
      catBudget
    } = this.state;
    const {
      setCategoryAddmode
    } = this.props;



    return (
      <React.Fragment>
        <DialogTitle id="form-dialog-title">카테고리 추가</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              label="카테고리"
              type="text"
              value={category}
              onChange={this.setCategoryInput}
              placeholder={'ex: 식비/유흥비'}
            />
            <TextField
              label="카테고리 예산"
              type="text"
              onChange={this.setCatBudgettInput}
              value={catBudget}
              placeholder={'카테고리 예산(원)'}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={e => setCategoryAddmode(false)} color="primary">
              취소
            </Button>
            <Button onClick={this.addCategory} color="primary">
              변경
            </Button>
          </DialogActions>
      </React.Fragment>
    );
  }
}

export default CategoryForm;
