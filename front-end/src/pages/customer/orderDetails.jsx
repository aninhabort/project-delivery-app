import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from '../../components/Navbar';
// import OrderCard from '../../components/OrderCard';

export default function OrderDetails({ match: { params: { id } } }) {
  const [getProducts, setProducts] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios({
        method: 'GET',
        url: `http://localhost:3001/customer/orders/${id}`,
        headers: { Authorization: token },
      });
      // console.log('response:', id, response.data);
      setProducts(response.data);
    };
    fetchProducts();
  }, [id, token]);

  console.log('LOG1', getProducts);
  // const { saleId } = getProducts[0];
  // console.log(saleId);
  if (getProducts.length > 0) {
    return (
      <main>
        <Navbar userName="#customerName" />
        <div>
          <span>Order Details</span>
          <div>
            <div
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              { getProducts[0].saleId }
            </div>
            <span
              data-testid="customer_order_details__element-order-details-label-seller-name"
            />
            <span
              data-testid="customer_order_details__element-order-details-label-order-date"
            />
            <span
              data-testid={
                `customer_order_details__element-order-details-label-delivery-status-${id}`
              }
            />
            <span
              data-testid={
                `customer_order_details__element-order-table-item-number-${id}`
              }
            />
            <span
              data-testid={ `customer_order_details__element-order-table-name-${id}` }
            />
            <span
              data-testid={ `customer_order_details__element-order-table-quantity-${id}` }
            />
            <span
              data-testid={ `customer_order_details__element-order-table-unit-price-${id}` }
            />
            <span
              data-testid={ `customer_order_details__element-order-table-sub-total-${id}` }
            />
            <span
              data-testid="customer_order_details__element-order-total-price"
            />
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
              disabled
            >
              check
            </button>
          </div>
        </div>
      </main>
    );
  }
  return (<div>carregando...</div>);
}

OrderDetails.propTypes = { match: PropTypes.shape().isRequired };
