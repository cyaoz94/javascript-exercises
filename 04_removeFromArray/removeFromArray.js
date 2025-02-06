const removeFromArray = function (array, ...value) {
  return array.filter((word) => !value.includes(word));
};

// Do not edit below this line
module.exports = removeFromArray;
