import React from 'react';

export default function Login() {
  return (
    <form>
      <h1>Login</h1>
      <label htmlFor="email">
        Email
        <input id="email" name="email" type="email" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" id="password" name="password" />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
