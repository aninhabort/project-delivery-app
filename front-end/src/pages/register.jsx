import React, { useState, useEffect } from 'react';
// import requestPost from '../helpers/axios.requests';
import validateRegister from '../helpers/validateRegister';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const button = () => {
      const test = validateRegister(name, email, password);
      console.log(test);
      return !test;
    };
    button();
  });

  const handleChange = (param, e) => {
    const { value } = e.target;
    param(value);
  };

  return (
    <form
      className="register-forms"
    >
      <label htmlFor="name">
        Nome
        <input
          data-testid="common_register__input-name"
          type="name"
          name="name"
          id="name"
          handleChange={ (e) => handleChange(setName, e) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          data-testid="common_register__input-email"
          type="email"
          name="email"
          id="email"
          handleChange={ (e) => handleChange(setEmail, e) }
        />
      </label>
      Senha
      <label htmlFor="password">
        <input
          data-testid="common_register__input-password"
          type="password"
          name="password"
          id="password"
          handleChange={ (e) => handleChange(setPassword, e) }
        />
      </label>
      <button
        data-testid="common_register__button-register"
        type="submit"
      >
        CADASTRAR
      </button>
      <p
        data-testid="common_login__element-invalid-email"
      >
        E-mail inválido
      </p>
    </form>
  );
}
