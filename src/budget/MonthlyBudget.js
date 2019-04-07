import React, {useState} from 'react'
import { getMonth } from 'date-fns';
import { getBudget } from '../storage/budget';
import BudgetAmountForm from './BudgetAmountForm';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';



const budgetDate = new Date();
export default function BudgetForm() {

  const [editmode, setEditmode] = useState(false);

  const budget = getBudget(budgetDate);

  return (
    <div>
      <h1>
        {getMonth(budgetDate)+1}월의 예산 {budget || 0}원
        <Button
          onClick={e => setEditmode(true)}
        >
          변경하기
        </Button>
      </h1>

      <CategoryForm/>
      <Categories/>
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
    </div>
  )
}
