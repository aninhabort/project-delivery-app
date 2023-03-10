import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import OrderDetailsCard from '../../components/OrderDetailCard';

export default function OrderDetails() {
  const [getProducts, setProducts] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));
  const id = 1;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios({
        method: 'GET',
        url: `http://localhost:3001/seller/orders/${id}`,
        headers: { Authorization: token, id },
      });
      setProducts(response.data);
    };
    fetchProducts();
  }, [id, token]);

  return (
    <main>
      <Navbar />
      {/* wm */}
      { getProducts.length > 0 && (
        getProducts.map((products, index) => (
          <OrderDetailsCard key={ index } item={ index } order={ products } />
        ))
      ) }
    </main>
  );
}

// OrderDetails.propTypes = { match: PropTypes.shape().isRequired };
