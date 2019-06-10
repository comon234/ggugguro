import {format} from "date-fns";
import {getCategories} from "../storage/categories";

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
  content,
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
    content,
    amount,
    regret
  });

  localStorage.setItem('expenses', JSON.stringify(expenses))
};

export const totalExpenses = ()=>{
  const expenses = getExpenses();
  var resultArr = [];

  for(const month in expenses){//month 2018-03 2018-04
    for(const day in expenses[month]){//01,02,03
    for(var i = 0; i < expenses[month][day].length; i++){ //01 : [{},{}]
     var idx = getKeyIndex(resultArr, expenses[month][day][i]);
     if(idx > -1){
        resultArr[idx].amount = Number(resultArr[idx].amount)+ Number(expenses[month][day][i].amount); 
        }else{
        resultArr.push(expenses[month][day][i]); 
     }
    }}
    console.log(resultArr);
    function getKeyIndex(arr, obj){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].category === obj.category){ 
            return i;  
        }
    }
    
    return -1;
    }
    }
  const totalExpenses = resultArr.map(function(obj){
  let rObj = {};
  rObj[obj.category]  = obj.amount;
  return rObj;
  })

  localStorage.setItem('totalExpenses', JSON.stringify(totalExpenses))
}

export const getTotalExpense = () => {
  totalExpenses();
  if (!localStorage.hasOwnProperty('totalExpenses')) {
    localStorage.setItem('totalExpenses', JSON.stringify({}))
  }
  return JSON.parse(localStorage.getItem(('totalExpenses')))
};

export const presentBudgets = () => {
  const totalExpenses = getTotalExpense();
  const categories = getCategories();
  const presentBudget = totalExpenses.map(function(obj){
    let rObj = {};
    const key = Object.keys(obj);
    console.log(key[0]);
    for(let i=0; i < key.length; i++){
        for(let j=0; j< categories.length; j++){
            if(categories[j].category === key[i]){
                const Budget = categories[j].catBudget - obj[key];
                console.log(Budget);
                rObj[key]  = Budget;
        }
      }
    }
    return rObj;
  })
  localStorage.setItem('presentBudget', JSON.stringify(presentBudget))
}
export const getPresentBudget = () => {
  presentBudgets();
  if (!localStorage.hasOwnProperty('presentBudget')) {
    localStorage.setItem('presentBudget', JSON.stringify({}))
  }
  return JSON.parse(localStorage.getItem(('presentBudget')))
};

