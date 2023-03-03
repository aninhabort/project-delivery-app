import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestPost } from '../helpers/axios.requests';
import validateRegister from '../helpers/validateRegister';

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
    <form
      className="register-forms"
      onSubmit={ async (e) => {
        e.preventDefault();
        const role = 'customer';
        const result = await requestPost('http://localhost:3001/register', { name, email, password, role }).then((response) => response).catch(({ response }) => response);
        const ERROR_STATUS = 409;
        if (result.status === ERROR_STATUS) setError(true);
        else history.push('/customer/products');
      } }
    >
      <label htmlFor="name">
        Nome
        <input
          data-testid="common_register__input-name"
          type="name"
          name="name"
          id="name"
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
          onChange={ (e) => handleChange(setPassword, e) }
        />
      </label>
      <button
        data-testid="common_register__button-register"
        type="submit"
        disabled={ button() }
      >
        CADASTRAR
      </button>
      { loginError === true && (
        <p
          data-testid="common_register__element-invalid_register"
        >
          Email já cadastrado.
        </p>
      )}
    </form>
  );
}
