const apiKey = 'LCTDyLKgNKpWy7CiocYrj43aaKpeOQ9n';
const city = 'Asuncion';

fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`)
  .then(response => response.json())
  .then(data => {
    const cityKey = data[0].Key;
    return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`);
  })
  .then(response => response.json())
  .then(data => {
    const weatherInfo = data[0];
    const temperature = weatherInfo.Temperature.Metric.Value;
    const weatherText = weatherInfo.WeatherText;
    const iconNumber = weatherInfo.WeatherIcon;

    // Actualizar el icono de clima
    const weatherIcon = document.getElementById('weather-icon');
    const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconNumber < 10 ? "0" : ""}${iconNumber}-s.png`;
    weatherIcon.style.backgroundImage = `url('${iconUrl}')`;

    // Actualizar la información del clima
    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = `Hoy en ${city}: ${weatherText}, ${temperature} °C`;
  })
  .catch(error => console.error(error));
 