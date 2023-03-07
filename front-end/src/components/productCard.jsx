import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  updateProduct, addProduct, decreaseProduct,
} from '../redux/cart';

export default function ProductCard({ product }) {
  const { id, name, quantity, price, urlImage } = product;
  const dispatch = useDispatch();
  return (
    <li>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price.split('.').join(',')}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <h3
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </h3>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        disabled={ quantity < 1 }
        onClick={ () => dispatch(decreaseProduct({ name })) }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }
        onChange={ (event) => {
          dispatch(updateProduct({ name, quantity: event.target.value }));
        } }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => dispatch(addProduct({ name })) }
      >
        +
      </button>
    </li>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};
