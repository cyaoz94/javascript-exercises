const sumAll = function (number1, number2) {
  if (
    !Number.isInteger(number1) ||
    !Number.isInteger(number2) ||
    number1 < 0 ||
    number2 < 0
  ) {
    return "ERROR";
  }

  const start = Math.min(number1, number2);
  const end = Math.max(number1, number2);

  sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
