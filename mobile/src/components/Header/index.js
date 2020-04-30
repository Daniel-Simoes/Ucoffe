import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../services/navigation';

import { Container, Logo, LogoImage, CartButton, Badge } from './styles';

export default function Header () {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <Logo onPress={() => NavigationService.back()}>
        <LogoImage />
      </Logo>
      <CartButton onPress={() => NavigationService.navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <Badge>{cartSize} </Badge>
      </CartButton>
    </Container>
  );
};


