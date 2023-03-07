import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestPost } from '../../helpers/axios.requests';
import Navbar from '../../components/Navbar';
import {
  selectCart, selectTotalValue, removeProduct,
} from '../../redux/cart';

export default function Checkout() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart).filter((product) => (product.quantity > 0));
  const totalValue = useSelector(selectTotalValue);
  const history = useHistory();

  const orderInfo = {
    userId: JSON.parse(localStorage.getItem('user')).id,
    sellerId: 2,
    totalPrice: totalValue,
    deliveryAddress: 'test',
    deliveryNumber: '1',
    productList: cart,
    status: 'pendente',
  };

  const checkoutOrder = async () => {
    const response = await requestPost('http://localhost:3001/customer/checkout', orderInfo);
    console.log(response);
    history.push(`/customer/orders/${response.data}`);
  };

  return (
    <main>
      <Navbar userName="#customerName" />
      <div>
        {
          cart.map((product, i) => (
            // componente? {
            <div key={ i }>
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
              >
                Remover
              </button>
            </div>
          // } componente?
          ))
        }
      </div>

      <span data-testid="customer_checkout__element-order-total-price">
        {
          Number(totalValue).toFixed(2).split('.').join(',')
        }
      </span>

      <div>

        <select data-testid="customer_checkout__select-seller">
          <option value="seller">seller</option>
        </select>

        <input
          type="text"
          data-testid="customer_checkout__input-address"
        />
        <input
          type="text"
          data-testid="customer_checkout__input-address-number"
        />

        <button
          type="button"
          onClick={ () => checkoutOrder() }
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar
        </button>
      </div>

    </main>
  );
}
