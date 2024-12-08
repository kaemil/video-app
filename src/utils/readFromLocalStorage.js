/**
 * Getting data from local storage by key.
 */
const readFromLocalStorage = (key = '') => {
  if (localStorage.getItem(key) === null) return;

  return JSON.parse(localStorage.getItem(key));
};

export default readFromLocalStorage;
