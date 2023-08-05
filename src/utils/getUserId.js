const getUserId = () => {
  const userId = localStorage.getItem("id");
  if (userId) {
    return userId;
  } else {
    return false;
  }
};

export { getUserId };
