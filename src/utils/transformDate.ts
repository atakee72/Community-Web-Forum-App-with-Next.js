const transformDate = (time: number): string => {
  const date = new Date(time).toLocaleString();
  return date;
};

export default transformDate;
