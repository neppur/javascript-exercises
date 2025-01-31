const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  // return celsius.toFixed(1);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  // return fahrenheit.toFixed(1);
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//  formel für von F zu C (32 °F − 32) × 5/9 = 0 °C
// für C zu F (0 °C × 9/5) + 32 = 32 °F
