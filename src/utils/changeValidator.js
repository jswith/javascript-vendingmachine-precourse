class ChangeValidator {
  static isMoneyInputLessThan10(moneyInput) {
    if (moneyInput < 10) {
      alert('10원 이상의 금액만 충전 가능합니다.');
      return true;
    }
  }

  static isInvalidMoneyInput(moneyInput) {
    if (this.isMoneyInputLessThan10(moneyInput)) return true;
    return false;
  }
}

export default ChangeValidator;
