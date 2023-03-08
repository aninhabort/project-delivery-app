import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
// import {
// selectCart, selectTotalValue, removeProduct,
// } from '../../redux/cart';

export default function orderDetails() {
  const { id } = useParams;
  console.log('useParams', id);
  const { token } = JSON.parse(localStorage.getItem('user'));
  // const teste = JSON.parse(localStorage.getItem('sales'));
  // console.log(teste.id);
  const getDetails = async () => {
    const response = await axios({
      method: 'get',
      url: `http://localhost:3001/customer/orderDetails/${id}`,
      // data: orderInfo,
      headers: { Authorization: token },
    });
    console.log(response);
  };

  return (
    <main onLoad={ getDetails }>
      <Navbar userName="#customerName" />
      <div>
        <span>Order Details</span>
        {/* <button
          type="button"
          onClick={ () => getDetails() }
          data-testid="customer_checkout__button-submit-order"
        >
          LOG
        </button> */}
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
    </main>
  );

  // return (
  //   <div>
  //     <div>OrderDetails</div>
  //   </div>
  // );
}
