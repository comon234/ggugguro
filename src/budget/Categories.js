import React, {Component} from 'react';
import {deleteCategory, getCategories} from "../storage/categories";

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

            <button
              onClick={e => this.handleDelete(category)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;