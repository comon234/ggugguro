export const getBudget = () => {
  return localStorage.hasOwnProperty('budget') ? localStorage.getItem(('budget')) : 0
};

export const setBudget = (budget) => {
  localStorage.setItem('budget', budget);
};