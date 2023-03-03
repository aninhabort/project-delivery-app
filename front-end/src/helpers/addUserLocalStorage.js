const addUserToLocalStorage = (user) => {
  const { name, email, role } = user;
  const newUser = { name, email, role };
  localStorage.setItem('user', JSON.stringify(newUser));
};

export default addUserToLocalStorage;
