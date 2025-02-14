const palindromes = function (string) {
  // remove comma and full stop
  // remove spaces
  string = string.replace(/[^\w\']|_/g, "").toLowerCase();
  reversedString = string.split("").reverse().join("");

  console.log(string, reversedString);
  return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
