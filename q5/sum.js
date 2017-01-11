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

  /*
    Use binary...
    Example:

    (decimal)
    3 + 1 = 

    (binary)
    11 + 01 = 

    (binary)
    100 =
    
    (decimal)
    4
  */

  return 'Error: Handle with bitwise.';
};