import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, LogoImage, CartButton, Badge } from './styles';

const Header = () => {
  return (
    <Container>
      <Logo>
        <LogoImage />
      </Logo>
      <CartButton>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <Badge />
      </CartButton>
    </Container>
  );
};

export default Header;
