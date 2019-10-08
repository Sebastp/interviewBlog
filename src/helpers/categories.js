export const categoriesObj = {
  'trading': {className: 'colorBtn__green', iconName: 'cat-bars.svg'},
  'e-commerce': {className: 'colorBtn__purple', iconName: 'cat-bag.svg'},
  'marketing': {className: 'colorBtn__red', iconName: 'cat-hash.svg'},
  'startup': {className: 'colorBtn__blue', iconName: 'cat-layout.svg'},
  'investing': {className: 'colorBtn__yellow', iconName: 'cat-chart.svg'},
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
