import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Footer from '../../components/footer';

import {
  Container,
  Box,
  Product,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductOrderInfo,
  ProductAmountControl,
  ProductAmountButton,
  ProductAmount,
  ProductSubtotal,
  ProductImage,
  ProductRemove,
} from './styles';

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);


  return (
    <>
      <Container>
        <Box>
        {products.map(product => (
          <Product key={product.id}>
            <ProductImage
              source={{ uri: product.image }}
            />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
              <ProductRemove>
                <Icon name="delete-forever" size={28} color="#999" />
              </ProductRemove>
            </ProductInfo>
            <ProductOrderInfo>
              <ProductAmountControl>
                <ProductAmountButton>
                  <Icon name="remove-circle-outline" size={22} color="#FFF" />
                </ProductAmountButton>
                <ProductAmount>100</ProductAmount>
                <ProductAmountButton>
                  <Icon name="add-circle-outline" size={22} color="#FFF" />
                </ProductAmountButton>
              </ProductAmountControl>
              <ProductSubtotal>$6,50</ProductSubtotal>
            </ProductOrderInfo>
          </Product>
          ))}
        </Box>
      </Container>
      <Footer buttonTitle="CHECKOUT" buttonIcon="payment" />
    </>
  );
}
