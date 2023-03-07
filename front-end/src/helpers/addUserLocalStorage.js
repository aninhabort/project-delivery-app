const addUserToLocalStorage = (user) => {
  const { id, name, email, role, token } = user;
  const newUser = { id, name, email, role, token };
  localStorage.setItem('user', JSON.stringify(newUser));
};

export default addUserToLocalStorage;
