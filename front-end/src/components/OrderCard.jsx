import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

export default function OrderCard({ order }) {
  const { id, status, saleDate, totalPrice } = order;
  const date = moment(new Date(saleDate)).format('DD/MM/YYYY');

  return (
    <Link
      to={ `/customer/orders/${id}` }
    >
      <div>
        <p
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          { `Pedido ${id}` }
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          { status }
        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          { date }
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          { totalPrice.replace(/\./g, ',') }
        </p>
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
  }).isRequired,
};
