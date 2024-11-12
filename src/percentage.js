function percentage(num, total) {
    if (total === 0) {
      throw new Error("Total cannot be zero when calculating percentage");
    }
    return (num / total) * 100;
  }
  
  module.exports = percentage;
  