export const getStorage = (key) => {
  return localStorage.getItem(key);
};

export const setStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

export const clearStorage = (key) => {
  return localStorage.removeItem(key);
};
