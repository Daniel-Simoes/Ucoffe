import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Footer from '../../components/footer';

import {
  Container,
  AddButton,
  ProductAmountText,
  Product,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductImage,
  AddButtonText,
  ProductAmount,
} from './styles';

export default function home() {
  return (
    <>
      <Container>
        <Product>
          <ProductImage
            source={{
              uri:
                'https://www.waterymouthcafe.co.nz/wp-content/uploads/2017/07/The-insiders-guide-to-great-coffee-from-the-baristas-at-Watery-Mouth-cafe-Blenheim1-500x500.jpg',
            }}
          />
          <ProductTitle>AMERICANO</ProductTitle>
          <ProductDescription>
            A long black coffee, prepared by diluting an espresso with hot
            water.
          </ProductDescription>
          <ProductPrice>$6.50</ProductPrice>
          <AddButton>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
              <ProductAmountText>100</ProductAmountText>
            </ProductAmount>
            <AddButtonText>ADD TO CART</AddButtonText>
          </AddButton>
        </Product>
      </Container>
      <Footer buttonTitle="GO TO CART" buttonIcon="keyboard-arrow-right" />
    </>
  );
}

home.navigationOptions = {
  title: null,
};
