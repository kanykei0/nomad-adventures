export const truncateString = (str, length) => {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
};

export const filterToursByType = (list, type) => {
  return list.filter((item) => item.type.includes(type));
};
