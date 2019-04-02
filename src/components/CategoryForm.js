import React, {Component} from 'react';
import {addCategory} from "../storage/categories";

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

    return (
      <div>
        카테고리 추가
        <input
          type="text"
          value={category}
          onChange={this.setCategoryInput}
          placeholder={'ex: 식비/유흥비'}
        />
        <input
          type="number"
          onChange={this.setPercentInput}
          value={percent}
          placeholder={'비율(%)'}
        />
        <button
          onClick={this.addCategory}
        >
          추가
        </button>
      </div>
    );
  }
}

export default CategoryForm;