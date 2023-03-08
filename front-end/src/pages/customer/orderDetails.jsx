// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import Navbar from '../../components/Navbar';
// import {
// selectCart, selectTotalValue, removeProduct,
// } from '../../redux/cart';

export default function orderDetails() {
  const id = 1;
  return (
    <div>
      <div>OrderDetails</div>
      <div>
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
        />
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        />
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        />
        <span
          data-testid={
            `customer_order_details__element-order-details-label-delivery-status-${id}`
          }
        />
        <span
          data-testid={
            `customer_order_details__element-order-table-item-number-${id}`
          }
        />
        <span
          data-testid={ `customer_order_details__element-order-table-name-${id}` }
        />
        <span
          data-testid={ `customer_order_details__element-order-table-quantity-${id}` }
        />
        <span
          data-testid={ `customer_order_details__element-order-table-unit-price-${id}` }
        />
        <span
          data-testid={ `customer_order_details__element-order-table-sub-total-${id}` }
        />
        <span
          data-testid="customer_order_details__element-order-total-price"
        />
        <span
          data-testid="customer_order_details__button-delivery-check"
        />
      </div>
    </div>
  );
}
