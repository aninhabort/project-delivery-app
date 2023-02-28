import React, { useEffect, useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPassword, setValidPassword] = useState(false);
  const [isButtonDisabled, setButtonDisable] = useState(true);

  useEffect(() => {
    const validateEmail = () => {
      const validate = /^[\w.]+@[\w.]+\.[a-z]{2,3}(\.[a-z]{2})?$/i.test(email);
      setValidEmail(validate);
    };
    validateEmail();

    const validatePassword = () => {
      const MINIMUM_PASSWORD = 5;
      const validate = password.length > MINIMUM_PASSWORD;
      if (validate === true) return setValidPassword(true);
      return setValidPassword(false);
    };

    validatePassword();

    const checkLoginValidations = () => {
      const validate = (isValidEmail && isValidPassword);
      console.log(`email: ${isValidEmail}, password: ${isValidPassword}`);
      setButtonDisable(!validate);
    };

    checkLoginValidations();
  });

  console.log(`LoginValidation ${isButtonDisabled}`);

  const handleChange = (param, e) => {
    const { value } = e.target;
    param(value);
  };

  return (
    <div className="home">
      <h1>Delivery</h1>
      <form className="login-forms">
        <label htmlFor="email">
          Email
          <input
            data-testid="common_login__input-email"
            id="email"
            name="email"
            type="email"
            onChange={ (e) => handleChange(setEmail, e) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            data-testid="common_login__input-password"
            type="password"
            id="password"
            name="password"
            onChange={ (e) => handleChange(setPassword, e) }
          />
        </label>
        <div className="buttons">
          <button
            data-testid="common_login__button-login"
            type="submit"
            className="button-login"
            disabled={ isButtonDisabled }
          >
            Login
          </button>
          <button
            data-testid="common_login__button-register"
            type="submit"
            className="button-create-user"
          >
            Ainda não tenho conta
          </button>
        </div>
      </form>
    </div>
  );
}
