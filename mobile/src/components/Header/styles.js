import styled from 'styled-components/native';

import logo from '../../assents/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  height: 140px;
  justify-content: space-between;
  align-items: center;
  padding: 25px 25px 0 15px;
  background: #3a3b3d;
  elevation: 2;
`;

export const Logo = styled.TouchableWithoutFeedback`
  width: 220px;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 85px;
`;

export const CartButton = styled.TouchableOpacity`
  transform: translateY(3px);
  position: relative;
`;

export const Badge = styled.Text`
  position: absolute;
  text-align: center;
  font-size: 10px;
  color: #fff;
  background: #bc7831;
  width: 18px;
  height: 18px;
  border-radius: 80px
  padding-top: 1px;
  right: -6px;
  top: -8px;
`;
