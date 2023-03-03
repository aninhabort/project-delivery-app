const validateRegister = (name, email, password) => {
  const NAME_LENGTH = 12;
  const PASSWORD_LENGTH = 6;

  const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const validatePassword = password.length >= PASSWORD_LENGTH;
  const validateName = name.length >= NAME_LENGTH;

  const validate = (validateEmail && validatePassword && validateName);

  return validate;
};

export default validateRegister;
