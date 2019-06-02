import React, { Component } from 'react';
import { deleteCategory, getCategories } from "../storage/categories";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class Categories extends Component {
  handleDelete = (category) => {
    if (!window.confirm("삭제하시겠습니까?")) {
      return
    }
    deleteCategory(category);
    alert("삭제되었습니다.");
    window.location.reload();
  };

  render() {
    const categories = getCategories();
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>카테고리 명</TableCell>
            <TableCell align="right">비율(%)</TableCell>
            <TableCell align="right">삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {categories.map(({category, percent}, i) => (
          <TableRow key={i}>
            <TableCell component="th" scope="row">
              {category}

            </TableCell>
            <TableCell align="right">{percent}</TableCell>
            <TableCell align="right">
              <IconButton
                onClick={e => this.handleDelete(category)}
                aria-label="Delete" 
              >
                <DeleteIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    );
  }
}

export default Categories;
