import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 75px;
  background: #3e3e3f;
  opacity: 0.9;
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-width: 2px;
`;

export const Wrapper = styled.View`
  padding: 20px;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(RectButton)`
  background: #bc7831;
  padding: 5px 10px 8px 12px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  margin-right: 5px;
  margin-top: 1px;

`;

export const TotalWrapper = styled.View``;

export const TotalLabel = styled.Text`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;
export const TotalValue = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #fff;
  margin-top: 2px;
`;
