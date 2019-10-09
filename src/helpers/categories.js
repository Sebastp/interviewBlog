export const categoriesObj = {
  'trading': {title: 'Trading', className: 'colorBtn__green', iconName: 'cat-bars.svg'},
  'e-commerce': {title: 'E-Commerce', className: 'colorBtn__purple', iconName: 'cat-bag.svg'},
  'marketing': {title: 'Marketing', className: 'colorBtn__red', iconName: 'cat-hash.svg'},
  'startup': {title: 'Startup', className: 'colorBtn__blue', iconName: 'cat-layout.svg'},
  'investing': {title: 'Investing', className: 'colorBtn__yellow', iconName: 'cat-chart.svg'},
}

export const categoriesKeys = Object.keys(categoriesObj);


/**
  @param {string} title - name of category to get
  @returns {Object} attributes - given category attributes object
  @returns {String} attributes.color - text/icon color //TODO
  @returns {String} attributes.color2 - background color //TODO
  @returns {String} attributes.className - tag button class name
*/

const getCategoryAtr = (title) => {
  let titleLow = title.toLowerCase()
  return categoriesObj[titleLow]
}
export default getCategoryAtr;
