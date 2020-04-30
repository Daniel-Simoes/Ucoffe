import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #3a3b3d;
`;

export const Box = styled.View`
  margin: 20px;
  margin-top: -20px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  padding-top: 20px;
  elevation: 2;
`;
export const Product = styled.View`
  flex-direction: row;
  border-bottom-width: ${(props) => (props.last ? '0' : '1px')};
  border-bottom-color: #3a3b3d;
  padding: 15px;
  height: 130px;
`;

export const ProductInfo = styled.View`
  flex-shrink: 1;
  margin: 0 25px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  color: #bc7831;
  margin-top: 5px;
`;

export const ProductOrderInfo = styled.View`
  flex-shrink: 0;
  align-items: flex-end;
  margin-left: auto;
`;

export const ProductAmountControl = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountButton = styled.TouchableOpacity`
margin-top: 5px;
`;

export const ProductAmount = styled.Text`
  text-align: center;
  width: 36px;
  font-size: 16px;
  margin-top: 5px;

  color: #FFF;
`;

export const ProductSubtotal = styled.Text`
  margin-top: auto;
  font-size: 16px;
  font-weight: bold;
  color: #888;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  align-self: center;
  border-radius: 100px;
  margin-left: 2px;
`;

export const ProductRemove = styled.TouchableOpacity`
  margin-top: auto;
  margin-left: -4px;
`;
