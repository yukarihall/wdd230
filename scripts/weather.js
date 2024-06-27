// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.7497&lon=6.6371&units=imperial&appid=cc6cfeb43c3f002475c65affc1cf1526`;



// handle errors
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data); // Display results when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// display the results in the HTML document
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&degF`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc;
}

// Invoke the apiFetch() function
apiFetch();
