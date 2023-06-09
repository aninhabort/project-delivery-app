import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import {
  selectCart, selectTotalValue, removeProduct,
} from '../../redux/cart';
import './Checkout.css';

export default function Checkout() {
  const dispatch = useDispatch();
  const [Address, setAddress] = useState('');
  const [AddressNumber, setAddressNumber] = useState('');
  const seller = 'Fulana Pereira';
  const cart = useSelector(selectCart).filter((product) => (product.quantity > 0));
  const totalValue = useSelector(selectTotalValue);
  const history = useHistory();

  const checkoutOrder = async () => {
    const saleProduct = cart.map(({ id, quantity }) => ({ productId: id, quantity }));
    const orderInfo = {
      userId: JSON.parse(localStorage.getItem('user')).id,
      sellerId: 2,
      totalPrice: totalValue.toFixed(2),
      deliveryAddress: Address,
      deliveryNumber: AddressNumber,
      productList: saleProduct,
      status: 'Pendente',
    };
    const { token } = JSON.parse(localStorage.getItem('user'));
    console.log('checkoutOrder: ', saleProduct);
    console.log('orderInfo: ', orderInfo);
    console.log('token: ', token);
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/customer/checkout',
      data: orderInfo,
      headers: { Authorization: token },
    });
    history.push(`/customer/orders/${response.data}`);
  };

  const handleChange = (param, e) => {
    const { value } = e.target;
    param(value);
  };

  return (
    <main>
      <Navbar />
      <div className="order-cart">
        {
          cart.map((product, i) => (
            // componente? {
            <div key={ i } className="product-cart">
              <div
                // key={ i }
                data-testid={
                  `customer_checkout__element-order-table-item-number-${i}`
                }
              >
                { i + 1 }
              </div>
              <div
                // key={ i }
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                { product.name }
              </div>
              <div
                // key={ i }
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                { product.quantity }
              </div>
              <div
                // key={ i }
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${i}`
                }
              >
                {/* { product.price } */}
                { product.price.split('.').join(',') }
              </div>
              <div
                // key={ i }
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${i}`
                }
              >
                { Number(product.quantity * product.price)
                  .toFixed(2).split('.').join(',') }
              </div>
              <button
                type="button"
                onClick={ () => {
                  dispatch(removeProduct({ product }));
                } }
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                className="button-remove"
              >
                Remover
              </button>
            </div>
          // } componente?
          ))
        }
      </div>

      <div className="total-price">
        <p className="text-total">Total:</p>
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {
            Number(totalValue).toFixed(2).split('.').join(',')
          }
        </span>

      </div>

      <div className="checkout">
        <select
          data-testid="customer_checkout__select-seller"
          className="select-user"
        >
          <option value={ seller }>{ seller }</option>
        </select>

        <input
          className="adressNumber"
          name="adressNumber"
          type="text"
          data-testid="customer_checkout__input-address"
          placeholder="Endereço"
          onChange={ (e) => handleChange(setAddress, e) }
        />
        <input
          className="adress"
          name="adress"
          type="text"
          data-testid="customer_checkout__input-address-number"
          placeholder="Número"
          onChange={ (e) => handleChange(setAddressNumber, e) }
        />
        <button
          type="button"
          onClick={ () => checkoutOrder() }
          data-testid="customer_checkout__button-submit-order"
          className="button-checkout"
        >
          Finalizar
        </button>
      </div>

    </main>
  );
}
