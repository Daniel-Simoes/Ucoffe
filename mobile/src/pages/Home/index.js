import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  AddButton,
  ProductAmountText,
  Product,
  ProductTitle,
  ProductPrice,
  ProductImage,
  AddButtonText,
  ProductAmount,
} from './styles';

export default function home() {
  return (
    <Container>
      <Product>
        <ProductImage
          source={{
            uri:
              'https://www.waterymouthcafe.co.nz/wp-content/uploads/2017/07/The-insiders-guide-to-great-coffee-from-the-baristas-at-Watery-Mouth-cafe-Blenheim1-500x500.jpg',
          }}
        />
        <ProductTitle>Titulo</ProductTitle>
        <ProductPrice>price</ProductPrice>
        <AddButton>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>100</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADD TO CART</AddButtonText>
        </AddButton>
      </Product>
    </Container>
  );
}
home.navigationOptions = {
  title: null,
};
