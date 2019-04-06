import React, {useState} from 'react'
import { getMonth } from 'date-fns';
import { getBudget } from '../storage/budget';
import BudgetAmountForm from './BudgetAmountForm';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import { Link } from "react-router-dom";


const budgetDate = new Date();
export default function BudgetForm() {

  const [editmode, setEditmode] = useState(false);

  const budget = getBudget(budgetDate);
  if (budget === null || editmode) {
    return (
      <BudgetAmountForm date={budgetDate}/>
    )
  }

  return (
    <div>
      <h1>
        {getMonth(budgetDate)+1}월의 예산 {budget}원
        <button
          onClick={e => setEditmode(true)}
        >
          변경하기
        </button>
      </h1>

      <CategoryForm/>
      <Categories/>
    </div>
  )
}
