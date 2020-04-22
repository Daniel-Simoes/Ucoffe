import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Ucoffe" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>My Cart </strong>
          <span>3 itens</span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
