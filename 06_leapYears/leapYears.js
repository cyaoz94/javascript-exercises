const leapYears = function (year) {
  // if year is century but not divisble by 400
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }

  // if year not divisible by 4
  if (year % 4 !== 0) {
    return false;
  }

  return true;
};

// Do not edit below this line
module.exports = leapYears;
