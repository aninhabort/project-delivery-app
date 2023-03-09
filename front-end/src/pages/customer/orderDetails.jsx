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
      setProducts(response.data);
    };
    fetchProducts();
  }, [id, token]);

  return (
    <main>
      <Navbar userName="#customerName" />
      { console.log('LOG', getProducts) }
      <div>
        <span>Order Details</span>
        <div>
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          />
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
          >
            check
          </button>
        </div>

      </div>
    </main>
  );
}

OrderDetails.propTypes = { match: PropTypes.shape().isRequired };

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/Navbar';
// import OrderCard from '../../components/OrderCard';

// export default function orderDetails({ match: { params: { id } } }) {
//   const [getProducts, setProducts] = useState([]);
//   const { token } = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await axios({
//         method: 'get',
//         url: `http://localhost:3001/customer/orders/${id}`,
//         headers: { Authorization: token },
//       });
//       setProducts(response.data);
//     };
//     fetchProducts();
//   }, [id, token]);
//   console.log(getProducts.map((item) => item));
//   return (
//     <div>
//       <Navbar />
//       { getProducts.map((item) => (
//         <div key={ item.id }>
//           <OrderCard order={ item } />
//         </div>
//       )) }
//     </div>
//   );

//   // return (
//   //   <main>
//   //     <Navbar userName="#customerName" />
//   //     { console.log('LOG', getProducts) }
//   //     <div>
//   //       <span>Order Details</span>
//   //       {/* <button
//   //         type="button"
//   //         onClick={ () => getDetails() }
//   //         data-testid="customer_checkout__button-submit-order"
//   //       >
//   //         LOG
//   //       </button> */}
//   //       <div>
//   //         <span
//   //           data-testid="customer_order_details__element-order-details-label-order-id"
//   //         />
//   //         <span
//   //           data-testid="customer_order_details__element-order-details-label-seller-name"
//   //         />
//   //         <span
//   //           data-testid="customer_order_details__element-order-details-label-order-date"
//   //         />
//   //         <span
//   //           data-testid={
//   //             `customer_order_details__element-order-details-label-delivery-status-${id}`
//   //           }
//   //         />
//   //         <span
//   //           data-testid={
//   //             `customer_order_details__element-order-table-item-number-${id}`
//   //           }
//   //         />
//   //         <span
//   //           data-testid={ `customer_order_details__element-order-table-name-${id}` }
//   //         />
//   //         <span
//   //           data-testid={ `customer_order_details__element-order-table-quantity-${id}` }
//   //         />
//   //         <span
//   //           data-testid={ `customer_order_details__element-order-table-unit-price-${id}` }
//   //         />
//   //         <span
//   //           data-testid={ `customer_order_details__element-order-table-sub-total-${id}` }
//   //         />
//   //         <span
//   //           data-testid="customer_order_details__element-order-total-price"
//   //         />
//   //         <span
//   //           data-testid="customer_order_details__button-delivery-check"
//   //         />
//   //       </div>

//   //     </div>
//   //   </main>
//   // );

//   // return (
//   //   <div>
//   //     <div>OrderDetails</div>
//   //   </div>
//   // );
// }
