/**
  @param {string} title - name of category to get
  @returns {Object} attributes - given category attributes object
  @returns {String} attributes.color - text/icon color //TODO
  @returns {String} attributes.color2 - background color //TODO
  @returns {String} attributes.className - tag button class name
*/
function getCategoryAtr(title) {
  let title = toLowerCase(title)
  switch (title) {
    case 'trading':
      return {className: 'colorBtn__blue'}
      break;
      case 'e-commerce':
        return {className: 'colorBtn__purple'}
        break;
      case 'marketing':
        return {className: 'colorBtn__red'}
        break;
      case 'startup':
        return {className: 'colorBtn__blue'}
        break;
      case 'investing':
        return {className: 'colorBtn__yellow'}
        break;
    default:

  }
}

export default model
