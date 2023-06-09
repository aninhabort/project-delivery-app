import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestPost } from '../helpers/axios.requests';
import validateRegister from '../helpers/validateRegister';
import addUserToLocalStorage from '../helpers/addUserLocalStorage';

import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setError] = useState(false);

  const history = useHistory();

  const handleChange = (param, e) => {
    const { value } = e.target;
    param(value);
  };

  const button = () => {
    const test = validateRegister(name, email, password);
    return !test;
  };
  button();

  return (
    <div className="home-register">
      <h1>Cadastro</h1>
      <form
        className="register-forms"
        onSubmit={ async (e) => {
          e.preventDefault();
          const result = await requestPost('http://localhost:3001/register', { name, email, password }).then((response) => response).catch(({ response }) => response);
          const ERROR_STATUS = 409;
          console.log(result);
          if (result.status === ERROR_STATUS) setError(true);
          else {
            addUserToLocalStorage(result.data);
            history.push('/customer/products');
          }
        } }
      >
        <label htmlFor="name">
          Nome
          <input
            data-testid="common_register__input-name"
            type="name"
            name="name"
            id="name"
            className="name"
            onChange={ (e) => handleChange(setName, e) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            type="email"
            name="email"
            id="email"
            className="email"
            onChange={ (e) => handleChange(setEmail, e) }
          />
        </label>
        Senha
        <label htmlFor="password">
          <input
            data-testid="common_register__input-password"
            type="password"
            name="password"
            id="password"
            className="password"
            onChange={ (e) => handleChange(setPassword, e) }
          />
        </label>
        <div className="buttons">
          <button
            data-testid="common_register__button-register"
            type="submit"
            disabled={ button() }
            className="button-create-user"
          >
            Cadastrar
          </button>
          { loginError === true && (
            <p
              data-testid="common_register__element-invalid_register"
            >
              Email já cadastrado.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
