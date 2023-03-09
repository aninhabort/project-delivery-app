import React from 'react';
import PropTypes from 'prop-types';

export default function OrderDetailsCard({ order }) {
  const {
    id,
    productName,
    productPrice,
    sellerName,
    status,
    saleDate,
    totalPrice,
    quantity,
  } = order;
  const itemNumber = 1;

  return (
    <main>
      <span>Order Details</span>
      <div>
        <div
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          { id }
        </div>
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          { sellerName }
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { saleDate }
        </span>
        <span
          data-testid={
            `customer_order_details__element-order-details-label-delivery-status-${id}`
          }
        >
          { status }
        </span>
        <span
          data-testid={
            `customer_order_details__element-order-table-item-number-${id}`
          }
        >
          { itemNumber }
        </span>
        <span
          data-testid={ `customer_order_details__element-order-table-name-${id}` }
        >
          { productName }
        </span>
        <span
          data-testid={ `customer_order_details__element-order-table-quantity-${id}` }
        >
          { quantity }
        </span>
        <span
          data-testid={ `customer_order_details__element-order-table-unit-price-${id}` }
        >
          { productPrice }
        </span>
        <span
          data-testid={ `customer_order_details__element-order-table-sub-total-${id}` }
        >
          { productPrice * quantity }
        </span>
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          { totalPrice }
        </span>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled
        >
          check
        </button>
      </div>
    </main>
  );
}

OrderDetailsCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleId: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    sellerName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    totalPrice: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
};
