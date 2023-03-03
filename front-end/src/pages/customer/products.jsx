import React from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/productCard';

export default function Products() {
  const name = 'MeuNome';
  const product = {
    id: 1,
    quantity: 0,
    name: 'cerveja',
    price: '1.99',
    urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  };

  return (
    <div>
      <Navbar
        userName={ name }
      />
      <ul>
        <ProductCard
          product={ product }
        />
      </ul>
    </div>
  );
}
