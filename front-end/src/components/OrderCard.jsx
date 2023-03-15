import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import './OrderCard.css';

export default function OrderCard({ order }) {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = order;
  const date = moment(new Date(saleDate)).format('DD/MM/YYYY');

  return (
    <Link
      to={ `/${role}/orders/${id}` }
      className="link-order"
    >
      <div className="order-card">
        <p
          data-testid={ `${role}_orders__element-order-id-${id}` }
        >
          { `Pedido ${id}` }
        </p>
        <p
          data-testid={ `${role}_orders__element-delivery-status-${id}` }
        >
          { status }
        </p>
        <p
          data-testid={ `${role}_orders__element-order-date-${id}` }
        >
          { date }
        </p>
        <p
          data-testid={ `${role}_orders__element-card-price-${id}` }
        >
          { totalPrice.replace(/\./g, ',') }
        </p>
        { role === 'seller' && (
          <p
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            { `${deliveryAddress}, ${deliveryNumber}` }
          </p>
        ) }
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
};
