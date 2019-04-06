import { format } from "date-fns";

export const getBudget = (date) => {
  if (!localStorage.hasOwnProperty('budgetMap')) {
    localStorage.setItem('budgetMap', JSON.stringify({}));
  }
  const budgetMap = JSON.parse(localStorage.getItem('budgetMap'));
  const key = format(date, 'YYYY-DD');
  if (budgetMap.hasOwnProperty(key)) {
    return budgetMap[key]
  }
  return null
};

export const setBudget = (date, budget) => {
  if (!localStorage.hasOwnProperty('budgetMap')) {
    localStorage.setItem('budgetMap', JSON.stringify({}));
  }
  const budgetMap = JSON.parse(localStorage.getItem('budgetMap'));
  const key = format(date, 'YYYY-DD');
  budgetMap[key] = budget;

  localStorage.setItem('budgetMap', JSON.stringify(budgetMap));
};