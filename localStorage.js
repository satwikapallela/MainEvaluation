export const getItem = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
