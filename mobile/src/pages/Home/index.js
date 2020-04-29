import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import Footer from '../../components/footer';

import {
  Container,
  List,
  AddButton,
  ProductAmountText,
  Product,
  ProductTitle,
  ProductPrice,
  Image,
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
  console.tron.log(products);

  return (
      <Container>
        <List>
          { products.map(product => (
            <Product key={product.id}>
              <Image
                src={product.image}
                alt={product.title}
              />
              <ProductTitle>{product.title}</ProductTitle>

              <ProductPrice>$6.50</ProductPrice>
              <AddButton>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>100</ProductAmountText>
                </ProductAmount>
                <AddButtonText>ADD TO CART</AddButtonText>
              </AddButton>
            </Product>
          ))}
        </List>
        <Footer buttonTitle="GO TO CART" buttonIcon="keyboard-arrow-right" />
      </Container>
  );

}
