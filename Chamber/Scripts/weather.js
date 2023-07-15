const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wSpeed');

const url = "https://api.openweathermap.org/data/2.5/weather?q=South Ogden&units=imperial&appid=d276b94d9092d3cec2698fcfd89e5332";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(0);
    windSpeed.innerHTML = weatherData.wind.speed;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch();

// const t = document.getElementById('temp').innerText;
// const s = document.getElementById('wSpeed').innerText;
