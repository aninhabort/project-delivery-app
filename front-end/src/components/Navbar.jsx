import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ userName }) {
  return (
    <nav>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        href="/products"
      >
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        href="/orders"
      >
        MEUS PEDIDOS
      </Link>
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {userName}
      </p>
      <p
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </p>
    </nav>
  );
}

Navbar.propTypes = {
  userName: PropTypes.string.isRequired,
};
