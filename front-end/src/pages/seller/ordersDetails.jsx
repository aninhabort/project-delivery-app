import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import OrderDetailsCard from '../../components/OrderDetailCard';

export default function OrdersDetails() {
  const [getProducts, setProducts] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));
  const { id } = useParams();

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
    <>
      <Navbar />
      { getProducts.length > 0 && (
        getProducts.map((products, index) => (
          <OrderDetailsCard key={ index } item={ index } order={ products } />
        ))
      ) }
    </>
  );
}
