import React, {Component} from 'react';
import {deleteCategory, getCategories} from "../storage/categories";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Categories extends Component {
  handleDelete = (category) => {
    deleteCategory(category);
    alert("삭제되었습니다.");
    window.location.reload();
  };

  render() {
    const categories = getCategories();
    return (
      <div>
        Categories:
        {categories.map(({category, percent}, i) => (
          <div key={i}>
            {category} 비율: {percent} &nbsp;

            <Button
              onClick={e => this.handleDelete(category)}
            >
              삭제
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;