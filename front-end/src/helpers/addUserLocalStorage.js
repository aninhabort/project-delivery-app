const addUserToLocalStorage = (user) => {
  const { name, email, role, token } = user;
  const newUser = { name, email, role, token };
  localStorage.setItem('user', JSON.stringify(newUser));
};

export default addUserToLocalStorage;
