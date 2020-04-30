import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import NavigationService from '../../services/navigation';

import {
  Container,
  Wrapper,
  TotalWrapper,
  TotalLabel,
  TotalValue,
  Button,
  ButtonText,
} from './styles';

export default function BottomBar({ buttonTitle, buttonIcon }) {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  );

  return (
    <Container>
      <Wrapper>
        <TotalWrapper>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalValue>{total}</TotalValue>
        </TotalWrapper>
        <Button onPress={() => NavigationService.navigate('Cart')}>
          <ButtonText>{buttonTitle}</ButtonText>
          <Icon name={buttonIcon} color="#FFF" size={18} />
        </Button>
      </Wrapper>
    </Container>
  );
}
