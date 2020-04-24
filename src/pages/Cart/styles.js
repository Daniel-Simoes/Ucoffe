import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  padding: 30px;
  background: rgba(250, 250, 250, 0.3);
  border-radius: 8px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #035639;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#035639')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  }
  thead th {
    color: #fff;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #fff;
  }

  img {
    margin-left:50px;
    height: 130px;
    border-radius: 50%;
  }

  strong {
    color:#fff;
    display: block;
  }
  span {
    display: block;
    margin-top: 4px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      background: rgba(250, 250, 250, 0.3);
      border-radius: 3px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
