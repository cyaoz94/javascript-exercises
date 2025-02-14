// (32°F − 32) × 5/9 = 0°C
const convertToCelsius = function (value) {
  let celciusValue = ((value - 32) * 5) / 9;
  return Math.round(celciusValue * 10) / 10;
};

// (0°C × 9/5) + 32 = 32°F
const convertToFahrenheit = function (value) {
  let fahrenheitValue = (value * 9) / 5 + 32;
  return Math.round(fahrenheitValue * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
