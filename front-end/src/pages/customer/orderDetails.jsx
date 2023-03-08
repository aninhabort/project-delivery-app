import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from '../../components/Navbar';
// import {
// selectCart, selectTotalValue, removeProduct,
// } from '../../redux/cart';

export default function orderDetails() {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const id = 1;
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
    <main>
      <Navbar userName="#customerName" />
      <div>
        <span>Order Details</span>
        <button
          type="button"
          onClick={ () => getDetails() }
          data-testid="customer_checkout__button-submit-order"
        >
          LOG
        </button>
      </div>
    </main>
  );
}
