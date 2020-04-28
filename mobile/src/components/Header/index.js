import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../services/navigation';

import { Container, Logo, LogoImage, CartButton, Badge } from './styles';

const Header = () => {
  return (
    <Container>
      <Logo onPress={() => NavigationService.back()}>
        <LogoImage />
      </Logo>
      <CartButton onPress={() => NavigationService.navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <Badge />
      </CartButton>
    </Container>
  );
};

export default Header;
