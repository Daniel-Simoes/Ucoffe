import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Footer from '../../components/footer';

import * as CartActions from '../../store/modules/cart/actions';

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

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
  }

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
              <ProductRemove type="button"
              onPress={() =>
                dispatch(CartActions.removeFromCart(product.id))}>
                <Icon name="delete-forever" size={28} color="#999" />
              </ProductRemove>
            </ProductInfo>
            <ProductOrderInfo>
              <ProductAmountControl>
                <ProductAmountButton>
                  <Icon name="remove-circle-outline" size={20} color="#FFF"
                  onPress={() => decrement(product)} />
                </ProductAmountButton>
                <ProductAmount readOnly >{product.amount}</ProductAmount>
                <ProductAmountButton>
                  <Icon name="add-circle-outline" size={20} color="#FFF"
                  onPress={() => increment(product)} />
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
