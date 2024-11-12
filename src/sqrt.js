function sqrt(num) {
    if (num < 0) {
      throw new Error("Cannot find the square root of a negative number");
    }
    return Math.sqrt(num);
  }
  
  module.exports = sqrt;
  