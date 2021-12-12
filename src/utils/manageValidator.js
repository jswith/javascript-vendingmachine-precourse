import { items } from '../model/store.js';

class ManageValidator {
  static isProudctNameDuplicated(name) {
    if (items.some((item) => item.name === name)) {
      alert('중복된 상품은 추가할 수 없습니다.');
      return true;
    }
  }

  static isProductNameBlank(name) {
    if (name === '') {
      alert('상품명을 입력해주세요.');
      return true;
    }
  }

  static isProductPriceUnder100(price) {
    if (price < 100) {
      alert('상품 가격은 100원 이상으로 입력해주세요.');
      return true;
    }
  }

  static isProductPriceDoesNotDivideBy10(price) {
    if (price % 10) {
      alert('상품 가격은 10원으로 나누어 떨어지는 수로 입력해주세요.');
      return true;
    }
  }

  static isProductQuantityUnder1(quantity) {
    if (quantity < 1) {
      alert('상품 수량은 최소 1개 입력해주세요.');
      return true;
    }
  }

  static isInvalidAddItemInput({ name, price, quantity }) {
    if (this.isProudctNameDuplicated(name)) return true;
    if (this.isProductNameBlank(name)) return true;
    if (this.isProductPriceUnder100(price)) return true;
    if (this.isProductPriceDoesNotDivideBy10(price)) return true;
    if (this.isProductQuantityUnder1(quantity)) return true;
    return false;
  }
}

export default ManageValidator;
