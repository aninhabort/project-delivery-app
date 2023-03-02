import React, { useState } from 'react';
// import requestPost from '../helpers/axios.requests';
import validateRegister from '../helpers/validateRegister';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setError] = useState(false);

  const handleChange = (param, e) => {
    const { value } = e.target;
    param(value);
  };

  const button = () => {
    const test = validateRegister(name, email, password);
    console.log(test);
    return !test;
  };
  button();

  return (
    <form
      className="register-forms"
      onSubmit={ async (e) => {
        e.preventDefault();
        const result = await requestPost('http://localhost:3001/register', { name, email, password }).then((response) => response).catch(({ response }) => response);
        const ERROR_STATUS = 404;
        if (result.status === ERROR_STATUS) setError(true);
        else console.log('erro');
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
          data-testid="common_login__element-invalid-email"
        >
          E-mail inválido
        </p>
      )}
    </form>
  );
}
