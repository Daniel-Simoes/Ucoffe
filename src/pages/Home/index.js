import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();

  }, []);


  function handleAddProduct(product) {
    // dispara uma ACTION para o redux
    dispatch(CartActions.addToCart(product));
  }

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
            />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button"
                    onClick={() => handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 3
              </div>

              <span>ADD TO CART</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }

