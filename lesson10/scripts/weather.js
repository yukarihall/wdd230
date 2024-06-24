// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7497&lon=6.6371&units=imperial&appid=74dd223c0301ed4a7abd4fed194860ea';

// Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // Uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Run the page locally and view the console output. Find the current temperature (temp) and the weather event description (weather.description), and image icon reference (weather[0].icon - 3 characters) in the data.
// Build the displayResults function to output to the given HTML document.
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

// Remember to invoke the apiFetch() function with a call somewhere in your script.
apiFetch();

