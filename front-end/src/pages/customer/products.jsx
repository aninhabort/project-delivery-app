import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/productCard';
import { axiosGetAll } from '../../helpers/axios.requests';

export default function Products() {
  const [products, setProducts] = useState([]);
  const name = 'MeuNome';

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axiosGetAll('http://localhost:3001/customer/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar
        userName={ name }
      />
      { products.map((product) => (
        <ul
          key={ product.id }
        >
          <ProductCard
            product={ product }
          />
        </ul>
      ))}
    </div>
  );
}
