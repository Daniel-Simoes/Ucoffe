import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Box,
  Product,
  ProductInfo,
  ProductTitle,
  ProductDescription,
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
  return (
    <>
      <Container>
        <Box>
          <Product>
            <ProductImage
              source={{
                uri:
                  'https://www.waterymouthcafe.co.nz/wp-content/uploads/2017/07/The-insiders-guide-to-great-coffee-from-the-baristas-at-Watery-Mouth-cafe-Blenheim1-500x500.jpg',
              }}
            />
            <ProductInfo>
              <ProductTitle>AMERICANO</ProductTitle>
              <ProductDescription>AMERICANO</ProductDescription>
              <ProductPrice>$6,50</ProductPrice>
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
              <ProductSubtotal>SUBTOTAL</ProductSubtotal>
            </ProductOrderInfo>
          </Product>
        </Box>
      </Container>
    </>
  );
}
