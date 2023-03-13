import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Navbar() {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  return (
    <nav>
      { role === 'customer' && (
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          PRODUTOS
        </Link>
      )}
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to={ `/${role}/orders` }
      >
        { role === 'customer' ? 'MEUS PEDIDOS' : 'PRODUTOS' }
      </Link>
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { JSON.parse(localStorage.getItem('user')).name }
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
