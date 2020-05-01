import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import Footer from '../../components/footer';
import SocialMidia from '../../components/SocialMidia';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );


  const dispatch = useDispatch();


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

  function handleAddProduct(id) {
    // dispara uma ACTION para o redux
    dispatch(CartActions.addToCartRequest(id));
  }


  return (
    <>
      <Container>
        <ScrollView>
        {products.map(product => (

            <Product key={product.id}>
              <ProductImage
                source={{ uri: product.image }}
              />
              <ProductTitle>{product.title}</ProductTitle>

              <ProductPrice>€{product.price}</ProductPrice>
              <AddButton onPress={() => handleAddProduct(product.id)}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>{amount[product.id] || 0}</ProductAmountText>
                </ProductAmount>
                <AddButtonText>ADD TO CART</AddButtonText>
              </AddButton>
            </Product>

        ))}

</ScrollView>

      </Container>
      <Footer buttonTitle="GO TO CART" buttonIcon="keyboard-arrow-right" />
      <SocialMidia />
  </>
  );

}

