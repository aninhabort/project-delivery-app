import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Cart, selectCart, selectTotalValue } from '../../redux/cart';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/productCard';
import { axiosGetAll } from '../../helpers/axios.requests';

export default function Products() {
  const [products, setProducts] = useState([]);
  const nameX = 'MeuNome';
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalValue);
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axiosGetAll('http://localhost:3001/customer/products');
      setProducts(data);
      dispatch(Cart(data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <Navbar
        userName={ nameX }
      />
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ totalPrice <= 0 }
        onClick={ () => (history.push('/customer/checkout')) }
      >
        Ver carrinho: R$:
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { String(totalPrice.toFixed(2)).split('.').join(',') }
        </span>
      </button>
      {
        cart.length > 0 && products && products.map((product) => {
          const { quantity } = cart.find(({ name }) => name === product.name);

          return (
            <ProductCard
              key={ product.id }
              product={ { ...product, quantity } }
            />
          );
        })
      }
    </div>
  );
}
