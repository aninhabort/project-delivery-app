import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const { id, quantity, name, price, urlImage } = product;
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
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        disabled={ quantity < 1 }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }

      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
      >
        +
      </button>
    </li>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};
