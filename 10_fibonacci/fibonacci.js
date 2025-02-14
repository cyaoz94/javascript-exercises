const fibonacci = function (number) {
  if (typeof number === "string") {
    number = Number(number);
  }

  if (number < 0) {
    return "OOPS";
  }

  if (number <= 1) {
    return number;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);

  // fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3
  // fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
  // fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1
  // fibonacci(1) =  1
  // fibonacci(0) = 0
  // fibonacci(2) = 1 + 0 = 1
};

// Do not edit below this line
module.exports = fibonacci;
