import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import Footer from '../../components/footer';

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
        <ScrollView>
        {products.map(product => (

            <Product key={product.id}>
              <ProductImage
                source={{ uri: product.image }}
              />
              <ProductTitle>{product.title}</ProductTitle>

              <ProductPrice>${product.price}</ProductPrice>
              <AddButton>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>100</ProductAmountText>
                </ProductAmount>
                <AddButtonText>ADD TO CART</AddButtonText>
              </AddButton>
            </Product>

        ))}

</ScrollView>
      </Container>
      <Footer buttonTitle="GO TO CART" buttonIcon="keyboard-arrow-right" />
  </>
  );

}
