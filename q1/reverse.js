module.exports = function(input) {
  let output = '';

  if (typeof input !== 'string') {
    throw new Error('typeof input must be string');
  }

  input = input.split('');

  for (let i = input.length - 1 ; i >= 0 ; i -- ) {
    output += input[i];
  }

  return output;
};