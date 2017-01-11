module.exports = (num1, num2) => {
  if (typeof num1 !== 'number' && typeof num2 !== 'number') {
    throw new Error('input must be number');
  }

  if (num2 === 0) {
    return num1;
  }
  
  if (num1 === 0) {
    return num2;
  }

  throw new Error('Handle with bitwise.');
};