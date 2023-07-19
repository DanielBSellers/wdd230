const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&APPID=d276b94d9092d3cec2698fcfd89e5332";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));
    document.getElementById('tmrTemp').textContent = Math.round(fivedayforecast[0].main.temp, 0);
    document.getElementById('disco1').textContent = fivedayforecast[0].weather[0].description;
    document.getElementById('twodayTemp').textContent = Math.round(fivedayforecast[1].main.temp, 0);
    document.getElementById('disco2').textContent = fivedayforecast[1].weather[0].description;
    document.getElementById('threedayTemp').textContent = Math.round(fivedayforecast[2].main.temp, 0);
    document.getElementById('disco3').textContent = fivedayforecast[2].weather[0].description;
  });