export const saveToLS = (key, value) => {
  if (key && value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }
};

export const loadFromLS = key => {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
