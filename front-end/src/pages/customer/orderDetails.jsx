import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from '../../components/Navbar';
// import OrderDetailsCard from '../../components/OrderDetailCard';

export default function OrderDetails() {
  const [getProducts, setProducts] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));
  const id = 1;

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
  console.log(getProducts);
  return (
    <main>
      <Navbar />
    </main>
  );
}

// OrderDetails.propTypes = { match: PropTypes.shape().isRequired };
