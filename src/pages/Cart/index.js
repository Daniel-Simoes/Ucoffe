import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
    }))
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUCT</th>
            <th>AMOUNT</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>

        <tbody>
        {cart.map(product => (
          <tr>
            <td>
              <img
                src={product.image}
                alt={product.title}
              />
            </td>
            <td>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={product.amount} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 12,00</strong>
            </td>
            <td>
              <button type="button"
              onClick={() =>
                dispatch({ type: 'REMOVE_TO_CART', id: product.id})}
              >
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
        </tr>
        ))}

        </tbody>
      </ProductTable>
      <footer>
        <button type="submit">Proceed to Checkout</button>
        <Total>
          <span>TOTAL:</span>
          <strong>R$ 120,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
