import React from 'react';
import PropTypes from 'prop-types';

export default function OrderDetailsCard({ orderDetails }) {
  return (
    <>
      test
    </>
  );
}

OrderCard.propTypes = {
  orderDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
};
