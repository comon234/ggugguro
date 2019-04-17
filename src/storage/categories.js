export const getCategories = () => {
  return localStorage.hasOwnProperty('categories') ? JSON.parse(localStorage.getItem('categories')) : []
};

export const addCategory = (category, percent) => {
  const categories = getCategories();
  categories.push({category, percent});
  localStorage.setItem('categories', JSON.stringify(categories))
};

export const deleteCategory = (c) => {
  const categories = getCategories();
  localStorage.setItem('categories', JSON.stringify(categories.filter(({category}) => c !== category)))
};