module.exports = function reverse (number) {
  if (number < 0) {
    number = -1 * number;
  }
   return +number.toString().split('').reverse().join('');
}

