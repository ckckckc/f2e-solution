module.exports = (input) => {
  if (typeof input !== 'string') {
    throw new Error('typeof input must be string');
  }
  
  let output = [];

  output.length = input.length;

  for (let i = 0, j = input.length - 1 ; i <= j ; i ++, j-- ) {
    output[i] = input[j];
    output[j] = input[i];
  }

  return output.join('');
};