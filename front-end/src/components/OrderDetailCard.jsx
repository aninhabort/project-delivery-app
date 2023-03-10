import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

export default function OrderDetailsCard({ item, order }) {
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
  const productPriceX = Number(productPrice);
  console.log(item + 1);
  return (
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
        { moment(new Date(saleDate)).format('DD/MM/YYYY') }
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
        { item + 1 }
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
        { productPriceX }
      </span>
      <span
        data-testid={ `customer_order_details__element-order-table-sub-total-${id}` }
      >
        { (productPriceX * quantity).toFixed(2) }
      </span>
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        { Number(totalPrice).toFixed(2).split('.').join(',') }
      </span>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled
      >
        check
      </button>
    </div>
  );
}

OrderDetailsCard.propTypes = {
  item: PropTypes.number.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    sellerName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    totalPrice: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
