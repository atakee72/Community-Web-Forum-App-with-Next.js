const date2Milliseconds = (date) => {
  const [day, month, year] = date.split("/").map(Number); // split the input into day, month, and year components
  const dateObject = new Date(year, month - 1, day); // create a new Date object with the year, month, and day components
  return dateObject;
};

export default date2Milliseconds;
