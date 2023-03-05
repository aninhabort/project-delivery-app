import { useSelector } from 'react-redux';
import { selectCart, selectTotalValue } from '../../redux/cart';
import Navbar from '../../components/Navbar';

export default function Checkout() {
  const cart = useSelector(selectCart).filter((product) => (product.quantity > 0));
  const totalValue = useSelector(selectTotalValue);

  return (
    <main>
      <Navbar />
      <div>
        {
          cart.map((product, i) => (
            // componente? {
            <div key={ i }>
              <div
                key={ i }
                data-testid={
                  `customer_checkout__element-order-table-item-number-${i}`
                }
              >
                { i + 1 }
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
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${i}`
                }
              >
                {/* { product.price } */}
                { product.price.split('.').join(',') }
              </div>
              <div
                key={ i }
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${i}`
                }
              >
                { Number(product.quantity * product.price)
                  .toFixed(2).split('.').join(',') }
              </div>
              <div
                key={ i }
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
              >
                [REMOVE]
              </div>
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
