import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import OrderCard from '../../components/OrderCard';

export default function Orders() {
  const [getOrder, setOrder] = useState([]);
  const { id, token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:3001/customer/orders',
        headers: { Authorization: token, id },
      });
      setOrder(response.data);
    };
    fetchProducts();
  }, [id, token]);
  console.log(getOrder.map((item) => item));
  return (
    <div>
      <Navbar />
      { getOrder.map((item) => (
        <div key={ item.id }>
          <OrderCard order={ item } />
        </div>
      )) }
    </div>
  );
}
