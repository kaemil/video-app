/**
 * Parsing numer to more readable numer format.
 */
const formatNumber = (number, formatter = 'fr-FR') =>
  number.toLocaleString(formatter).replace(/\./g, ' ');

export default formatNumber;
