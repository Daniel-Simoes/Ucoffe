import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-top: -15px;

  img{
    width:160px;
    height:130px;
    margin-bottom: 50px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 150ms ease-in-out;
  position: relative;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }

  strong {
    display: block;
    color: #CD8500;
  }

  span {
    font-size: 12px;
    color: #999;
  }
`;
