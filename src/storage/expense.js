import {format} from "date-fns"

export const getExpenses = () => {
  if (!localStorage.hasOwnProperty('expenses')) {
    localStorage.setItem('expenses', JSON.stringify({}))
  }
  return JSON.parse(localStorage.getItem(('expenses')))
};

export const getExpensesFromDate = ({
  date
}) => {
  const expenses = getExpenses();
  const month = format(date, "YYYY-MM");
  const day = format(date, "DD");
  if (!expenses[month] || !expenses[month][day]) {
    return []
  }
  return expenses[month][day]
};

 /*
  * 파라미터
  * amount: 금액
  * category: 카테고리
  * date: 날짜
  *
  * {
    "2018-03": {
      "01": [
        {
          category: "술값",
          amount: 30000
        },
        {
          category: "밥값",
          amount: 20000
        }
      ],
      "02": [
        {
          category: "술값",
          amount: 25000
        },
        {
          category: "밥값",
          amount: 20000
        }
      ]
    },
    "2018-04": {

    }
  }
  */

export const addExpense = ({
  amount,
  category,
  date,
  regret
}) => {
  const expenses = getExpenses();

  const month = format(date, "YYYY-MM");
  if (!expenses.hasOwnProperty(month)) {
    expenses[month] = {}
  }

  const day = format(date, "DD");
  if (!expenses[month].hasOwnProperty(day)) {
    expenses[month][day] = []
  }

  expenses[month][day].push({
    category,
    amount,
    regret
  });

  localStorage.setItem('expenses', JSON.stringify(expenses))
};

// export const totalExpense = () =>{
//   const expenses = getExpenses();
//   expenses.map(({category})=>{
//     for(const value of expenses){
//
//     const totalExpense = 0;
//     totalExpense = expenses[category].amount + totalExpense;
//   }
//   })
//
// };
