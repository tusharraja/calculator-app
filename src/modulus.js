function modulus(firstNum, secondNum) {
    if (secondNum === 0) {
      throw new Error("Cannot perform modulus by zero");
    }
    return firstNum % secondNum;
  }
  
  module.exports = modulus;
  