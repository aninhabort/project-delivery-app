import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar({ userName }) {
  const history = useHistory();

  return (
    <nav>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/orders"
      >
        MEUS PEDIDOS
      </Link>
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {userName}
      </p>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => {
          localStorage.removeItem('user');
          history.push('/login');
        } }
        type="button"
      >
        Sair
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  userName: PropTypes.string.isRequired,
};
