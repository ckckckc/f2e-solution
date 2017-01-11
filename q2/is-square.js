module.exports = (num) => {
  if (typeof num !== "number" && num <= 0) {
    throw new Error('typeof input must be positive integer number.');
  }
  
  for (let i = 1 ; num >= i * i ; i++) {
    if (num === i * i) {
      return true;
    }
  }
  return false;
};