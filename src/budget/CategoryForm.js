import React, {Component} from 'react';
import {addCategory} from "../storage/categories";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class CategoryForm extends Component {
  state = {
    category: '',
    percent: 0
  };

  setCategoryInput = (e) => {
    this.setState({
      category: e.target.value
    })
  };

  setPercentInput = (e) => {
    const percent = Number(e.target.value);
    if (percent < 0 || percent > 100) {
      alert("비율은 0에서 100까지 설정할 수 있습니다.");
      return;
    }
    this.setState({
      percent: percent
    })
  };

  addCategory = () => {
    const {
      category,
      percent
    } = this.state;
    addCategory(category, percent)
    this.setState({
      category: '',
      percent: 0
    });
    alert("설정되었습니다.");
    window.location.reload();
  };

  render() {
    const {
      category,
      percent
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
              label="비율"
              type="text"
              onChange={this.setPercentInput}
              value={percent}
              placeholder={'비율(%)'}
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