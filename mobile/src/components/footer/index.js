import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Wrapper,
  TotalWrapper,
  TotalLabel,
  TotalValue,
  Button,
  ButtonText,
} from './styles';

export default function BottomBar() {
  return (
    <Container>
      <Wrapper>
        <TotalWrapper>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalValue>$10,50</TotalValue>
        </TotalWrapper>
        <Button>
          <ButtonText>GO TO CART</ButtonText>
          <Icon name="keyboard-arrow-right" color="#FFF" size={18} />
        </Button>
      </Wrapper>
    </Container>
  );
}
