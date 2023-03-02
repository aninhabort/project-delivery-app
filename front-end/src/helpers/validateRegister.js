const validateRegister = (name, email, password) => {
  const NAME_LENGTH = 12;
  const PASSWORD_LENGTH = 6;

  const validateEmail = /^\S+@[a-z0-9]+\.[a-z]+$/i.test(email);
  const validatePassword = password.length >= PASSWORD_LENGTH;
  const validateName = name.length > NAME_LENGTH;
  console.log(validateEmail);

  const validate = (validateEmail && validatePassword && validateName);

  return validate;
};

export default validateRegister;
