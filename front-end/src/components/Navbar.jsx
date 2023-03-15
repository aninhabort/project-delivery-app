import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  return (
    <nav className="navbar">
      <div>
        { role === 'customer' && (
          <Link
            data-testid="customer_products__element-navbar-link-products"
            to="/customer/products"
            className="link-products"
          >
            PRODUTOS
          </Link>
        )}
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to={ `/${role}/orders` }
          className="link-orders"
        >
          { role === 'customer' ? 'MEUS PEDIDOS' : 'PRODUTOS' }
        </Link>
      </div>
      <div className="user-and-exit-button">
        <p
          className="user-name"
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
          className="button-exit"
        >
          Sair
        </button>
      </div>
    </nav>
  );
}
