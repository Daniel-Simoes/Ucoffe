import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
    }))
  );

  return (
    <>
      <Container>
        <Box>
        {cart.map(product => (
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
                <ProductAmount readOnly >{product.amount}</ProductAmount>
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
