const add = function (value1, value2) {
  return value1 + value2;
};

const subtract = function (value1, value2) {
  return value1 - value2;
};

const sum = function (values = []) {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((total, value) => total + value);
};

const multiply = function (values = []) {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((total, value) => total * value);
};

const power = function (value, power) {
  return Math.pow(value, power);
};

const factorial = function (value) {
  if (value < 0) {
    return "ERROR";
  }

  if (value === 0) {
    return 1;
  }

  return value * factorial(value - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
