import React, {useState} from 'react'
import { getMonth } from 'date-fns';
import { getBudget } from '../storage/budget';
import BudgetAmountForm from './BudgetAmountForm';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const budgetDate = new Date();
export default function BudgetForm() {

  const [editmode, setEditmode] = useState(false);
  const [categoryAddmode, setCategoryAddmode] = useState(false);

  const budget = getBudget(budgetDate);

  return (
    <div>
      <h1>
        {getMonth(budgetDate)+1}월의 예산 {budget || 0}원
        <Fab 
          color="secondary" 
          aria-label="Edit"
          size="small" 
          onClick={e => setEditmode(true)}
        >
          <EditIcon/>
        </Fab>
      </h1>
      <Categories/>
      <Fab
        color="primary"
        aria-label="Add" 
        onClick={e => setCategoryAddmode(true)}
        style={{
          position: 'absolute',
          bottom: 40,
          right: 40,
        }}
      >
        <AddIcon />
      </Fab>
      <Dialog
          open={editmode}
          onClose={e => setEditmode(false)}
          aria-labelledby="form-dialog-title"
        >
        <BudgetAmountForm
          date={budgetDate}
          setEditmode={setEditmode}
        />
      </Dialog>
      <Dialog
          open={categoryAddmode}
          onClose={e => setCategoryAddmode(false)}
          aria-labelledby="form-dialog-title"
        >
        <CategoryForm
          setCategoryAddmode={setCategoryAddmode}
        />
      </Dialog>
    </div>
  )
}