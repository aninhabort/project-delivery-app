import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  const quantity = 0;
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
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }

      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
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
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};
