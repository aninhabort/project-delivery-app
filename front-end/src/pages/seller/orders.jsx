import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import OrderCard from '../../components/OrderCard';

export default function Orders() {
  const [getOrder, setOrder] = useState([]);
  const { id, token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchSellerOrders = async () => {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:3001/seller/orders',
        headers: { Authorization: token, id },
      });
      setOrder(response.data);
    };
    fetchSellerOrders();
  }, [id, token]);

  return (
    <>
      <Navbar />
      { getOrder.map((item) => (
        <div key={ item.id }>
          <OrderCard order={ item } />
        </div>
      )) }
    </>
  );
}
