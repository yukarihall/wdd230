// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');

const apiKey = 'cc6cfeb43c3f002475c65affc1cf1526';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=50.02312&lon=-113.57168&units=imperial&appid=cc6cfeb43c3f002475c65affc1cf1526`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=50.02312&lon=-113.57168&units=imperial&appid=cc6cfeb43c3f002475c65affc1cf1526`;

// Fetch current weather
async function fetchCurrentWeather() {
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

// Fetch 3-day forecast
async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data); // Display results when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display the results in the HTML document
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc;
}

// Display 3-day forecast
function displayForecast(data) {
    const forecastContainer = document.querySelector('#forecast');
    // forecastContainer.innerHTML = '<h2>3-Day Forecast</h2>';
    
    const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00')); // Get forecasts at 12:00 PM each day
    forecastList.slice(0, 3).forEach(day => {
        const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
        const temp = day.main.temp;
        const description = day.weather[0].description;
        
        const forecastItem = document.createElement('div');
        forecastItem.innerHTML = `<strong>${date}</strong>: ${temp}&deg;F, ${description}`;
        forecastContainer.appendChild(forecastItem);
    });
}

// Banner functionality
function checkBannerDisplay() {
    const banner = document.querySelector('#banner');
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) { // Show banner on Monday (1), Tuesday (2), and Wednesday (3)
        banner.style.display = 'block';
    }
}

function setupBannerClose() {
    const closeBtn = document.querySelector('#close-banner');
    closeBtn.addEventListener('click', () => {
        document.querySelector('#banner').style.display = 'none';
    });
}

// Initialize
fetchCurrentWeather();
fetchForecast();
checkBannerDisplay();
setupBannerClose();
