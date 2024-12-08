/**
 * Saving data to local storage using key and data.
 */
const saveToLocalStorage = (key = '', data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export default saveToLocalStorage;
