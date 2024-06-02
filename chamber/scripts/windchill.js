function calculateWindChill() {
  // Get the input values
  const temperatureInput = document.getElementById('temperature');
  const windSpeedInput = document.getElementById('windSpeed');
  
  // Get the temperature and wind speed values from the inputs
  const temperature = parseFloat(temperatureInput.value);
  const windSpeed = parseFloat(windSpeedInput.value);

  // Get the span elements to display input values
  const temperatureValueSpan = document.getElementById('temperature-value');
  const windSpeedValueSpan = document.getElementById('windSpeed-value');
  
  // Update the span elements with the input values
  temperatureValueSpan.textContent = temperature;
  windSpeedValueSpan.textContent = windSpeed;

  // Get the result element
  const result = document.getElementById('result');

  // Check if the inputs meet the specification limits
  if (temperature <= 50 && windSpeed > 3.0) {
    // Calculate wind chill factor using the formula
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    // Display the result rounded to 2 decimal places
    result.textContent = `Wind Chill: ${windChill.toFixed(2)} °F`;
  } else {
    // Display "N/A" if inputs don't meet the specification limits
    result.textContent = 'N/A';
  }
}
