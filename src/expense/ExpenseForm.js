import React, { useEffect, useState } from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { getCategories } from "../storage/categories";
import { addExpense } from "../storage/expense";
import AddIcon from '@material-ui/icons/Add';

const ExpenseForm = ({
  date,
  setDate
}) => {

  const categories = getCategories();
  const [category, setCategory] = useState(null)
  const [content, setContent] = useState("")
  const [amount, setAmount] = useState(0);
  const [regret, setRegret] = useState(0);
  const [on, setOn] = useState(false);

  const handleSubmit = () => {
    addExpense({
      date, category, content, amount, regret
    });
    setDate(null);
    window.location.reload();
  };

  useEffect(() => {
    if (categories.length > 0) {
      setCategory(categories[0].category)
    }
  }, []);

  if (!on) {
    return (
      <div>
        <Button onClick={() => setOn(true)}>
          <AddIcon/>
        </Button>
      </div>
    )
  }

  return (
    <React.Fragment>
      <DialogTitle id="form-dialog-title" align="center">지출 추가</DialogTitle>
      <DialogContent align="center">
        <TextField
          autoFocus
          label="지출 비용(원)"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value *1)}
          style={{width: "50%"}}
        />
         <TextField
          autoFocus
          label="내용"
          type="string"
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{width: "50%"}}
        />
        <Select
          onChange={e => setCategory(e.target.value)}
          value={category || ''}
        >
          {categories.map(({category}, i) => (
            <MenuItem key={i} value={category}>{category}</MenuItem>
          ))}
        </Select>
        <Select
          onChange={e => setRegret(e.target.value)}
          value={`${regret}`}
        >
          {
            ["X","하","중","상"].map((value, i) => {
              return (
                <MenuItem key={i} value={value}>{value}</MenuItem>
              )
            })
          }

        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          추가
        </Button>
      </DialogActions>
    </React.Fragment>
  );
};

export default ExpenseForm;
