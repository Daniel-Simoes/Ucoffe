import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;

  p {
    color:rgba(250, 250, 250, 0.6);
    margin: 6px 0;
    text-align: justify;
  }

  li {
    display: flex;
    flex-direction: column;
    background: rgba(250, 250, 250, 0.2);
    border-radius: 8px;
    padding: 20px;

    img {
      align-self: center;
      border-radius: 50%;
      max-height: 160px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 10px;
    }

    > span {
      font-size: 21px;
      color: rgba(0, 0, 0, 0.6);
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: background 0.2s;
      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.02, '#3a3b3d')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }

      svg {
        margin-right: 5px;
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

