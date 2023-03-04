import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart';
import Navbar from '../../components/Navbar';

export default function Checkout() {
  const cart = useSelector(selectCart);
  return (
    <main>
      <Navbar />
      <div>
        {
          // componente?
          cart.map((product, i) => (
            <div key={ i }>
              <div
                key={ i }
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                { i }
              </div>
              <div
                key={ i }
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                { product.name }
              </div>
              <div
                key={ i }
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                { product.quantity }
              </div>
              <div
                key={ i }
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                { product.price }
              </div>
              <div
                key={ i }
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                { product.quantity * product.price }
              </div>
              <div
                key={ i }
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
              >
                [REMOVE]
              </div>
            </div>
          ))
        }
      </div>

      <p data-testid="customer_checkout__element-order-total-price" />

      <select data-testid="customer_checkout__select-seller">
        <option value="seller">seller</option>
      </select>

      <input type="text" data-testid="customer_checkout__input-address" />
      <input type="text" data-testid="customer_checkout__input-address-number" />

      <button type="button" data-testid="customer_checkout__button-submit-order">
        Finalizar
      </button>

    </main>
  );
}
