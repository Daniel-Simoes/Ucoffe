import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #3a3b3d;
`;

export const List = styled.FlatList``;

export const AddButton = styled(RectButton)`
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  height: 45px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 6px;
`;

export const Product = styled.View`
  background: rgba(0, 0, 0, 0.2);
  margin: 0 20px 20px;

  border-radius: 3px;
  elevation: 2;
  padding: 15px 10px 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin: 0 8px;
`;

export const ProductDescription = styled.Text`
  font-size: 16px;
  margin: 0 8px;
  color: #fff;
`;

export const ProductPrice = styled.Text`
  margin: 0 10px 15px;
  font-size: 22px;
  font-weight: bold;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
  border-radius: 100px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.02, '#3a3b3d')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 75px;
  align-self: stretch;
`;
