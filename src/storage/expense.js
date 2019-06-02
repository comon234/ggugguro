import {format} from "date-fns"

export const getExpenses = () => {
  return localStorage.hasOwnProperty('expenses') ? JSON.parse(localStorage.getItem(('expenses'))) : {}
};

export const addExpense = ({
  amount,
  category,
  date
}) => {
  if (!category) {
    return
  }
  const expenses = getExpenses();
  if (!expenses.hasOwnProperty(category)) {
    expenses[category] = []
  }
  expenses[category].push({amount, date: format(date, "YYYY-MM-DD")});

  localStorage.setItem('expenses', JSON.stringify(expenses))

};

export const totalExpense = () =>{
  const expenses = getExpenses();
  expenses.map(({category})=>{
    for(const value of expenses){

    const totalExpense = 0;
    totalExpense = expenses[category].amount + totalExpense;
  }
  })
  
};
