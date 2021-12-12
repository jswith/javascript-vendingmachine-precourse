import { $ } from '../utils/dom.js';

class ManageView {
  constructor() {}

  getInput() {
    return {
      name: $('#product-name-input').value,
      price: Number($('#product-price-input').value),
      quantity: Number($('#product-quantity-input').value),
    };
  }

  render() {}

  template() {
    return `
      <section id="manage-tab">
        <form>
          <h3>상품 추가하기</h3>
          <input id="product-name-input" type="text" placeholder="상품명" />
          <input id="product-price-input" type="number" placeholder="가격" />
          <input id="product-quantity-input" type="number" placeholder="수량" />
          <button id="product-add-button">추가하기</button>
        </form>
        <h3>상품 현황</h3>
        <table id="product-table">
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
          <tr class="product-manage-item">
            <td class="product-manage-name">임시상품</td>
            <td class="product-manage-price">1000</td>
            <td class="product-manage-quantity">20</td>
          </tr>
        </table>
      </section>
      `;
  }
}

export default ManageView;
