import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

export default function OrderDetailsCard({ item, order }) {
  const { role, token } = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();
  const {
    productName,
    productPrice,
    status: actualStatus,
    sellerName,
    saleDate,
    totalPrice,
    quantity,
  } = order;
  const [status, setStatus] = useState(actualStatus);
  const productPriceX = Number(productPrice);

  const changeStatus = () => {
    switch (status) {
    case 'Pendente':
      setStatus('Preparando');
      break;
    case 'Preparando':
      setStatus('Em Trânsito');
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    const updateProductStatus = async () => {
      const response = await axios({
        method: 'PATCH',
        url: `http://localhost:3001/seller/orders/${id}`,
        headers: { Authorization: token, status },
      });
      setStatus(response.data);
    };
    console.log(status);
    updateProductStatus();
  }, [status, id, token]);

  const changeStatusButton = () => {
    changeStatus();
  };

  return (
    <div>
      <div
        data-testid={ `${role}_order_details__element-order-details-label-order-id` }
      >
        { id }
      </div>
      <span
        data-testid={ `${role}_order_details__element-order-details-label-seller-name` }
      >
        { sellerName }
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-details-label-order-date` }
      >
        { moment(new Date(saleDate)).format('DD/MM/YYYY') }
      </span>
      <span
        data-testid={
          `${role}_order_details__element-order-table-item-number-${id}`
        }
      >
        { item + 1 }
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-table-name-${id}` }
      >
        { productName }
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-table-quantity-${id}` }
      >
        { quantity }
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-table-unit-price-${id}` }
      >
        { productPriceX }
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-table-sub-total-${id}` }
      >
        { (productPriceX * quantity).toFixed(2) }
      </span>
      <span
        data-testid={ `${role}_order_details__element-order-total-price` }
      >
        { Number(totalPrice).toFixed(2).split('.').join(',') }
      </span>
      <span
        data-testid={
          `${role}_order_details__element-order-details-label-delivery-status-${id}`
        }
      >
        { status }
      </span>
      { role === 'customer' ? (
        <button
          type="button"
          data-testid={ `${role}_order_details__button-delivery-check` }
          disabled
        >
          check
        </button>
      ) : (
        <>
          <button
            type="button"
            data-testid={ `${role}_order_details__button-preparing-check` }
            onClick={ () => changeStatusButton() }
            disabled={ status !== 'Pendente' }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid={ `${role}_order_details__button-dispatch-check` }
            onClick={ () => changeStatusButton() }
            disabled={ (status !== 'Preparando') }
          >
            SAIU PARA ENTREGA
          </button>
        </>
      )}
    </div>
  );
}

OrderDetailsCard.propTypes = {
  item: PropTypes.number.isRequired,
  order: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    sellerName: PropTypes.string.isRequired,
    saleDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    totalPrice: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
