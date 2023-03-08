import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestPost } from '../helpers/axios.requests';
import addUserToLocalStorage from '../helpers/addUserLocalStorage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPassword, setValidPassword] = useState(false);
  const [isButtonDisabled, setButtonDisable] = useState(true);
  const [loginError, setError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const validateEmail = () => {
      const validate = /^\S+@[a-z0-9]+\.[a-z]+$/i.test(email);
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
      setButtonDisable(!validate);
    };

    checkLoginValidations();

    const verifyLocalStorage = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        history.push('/customer/products');
      }
    };
    verifyLocalStorage();
  });

  const handleChange = (param, e) => {
    const { value } = e.target;
    param(value);
  };

  return (
    <div className="home">
      <h1>Delivery</h1>
      <form
        onSubmit={ async (e) => {
          e.preventDefault();
          const result = await requestPost('http://localhost:3001/login', { email, password }).then((response) => response).catch(({ response }) => response);
          const ERROR_STATUS = 404;
          if (result.status === ERROR_STATUS) setError(true);
          else {
            addUserToLocalStorage(result.data);
            history.push('/customer/products');
          }
        } }
        className="login-forms"
      >
        <label htmlFor="email">
          Email
          <input
            data-testid="common_login__input-email"
            className="email"
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
            className="password"
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
            onClick={ () => (history.push('/register')) }
          >
            Ainda não tenho conta
          </button>
          { loginError === true && (
            <p
              data-testid="common_login__element-invalid-email"
            >
              E-mail inválido
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
