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

export default function BottomBar({ buttonTitle, buttonIcon }) {
  return (
    <Container>
      <Wrapper>
        <TotalWrapper>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalValue>$6.50</TotalValue>
        </TotalWrapper>
        <Button>
          <ButtonText>{buttonTitle}</ButtonText>
          <Icon name={buttonIcon} color="#FFF" size={18} />
        </Button>
      </Wrapper>
    </Container>
  );
}
