import styled from 'styled-components/native';

import logo from '../../assents/images/hr.png';

export const Container = styled.View`
  flex-direction: row;
  height: 1px;

  align-items: center;
  padding: 0 0 0 114px;
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
  width: 200px;
  margin-top: -100px;
  opacity: 0.3;
`;
