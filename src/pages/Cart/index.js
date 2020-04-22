import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="data:image/jpeg;base64,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"
                alt="Capuccino"
              />
            </td>
            <td>
              <strong>Capuccino</strong>
              <span>R$ 6,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 12,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
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
