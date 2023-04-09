// Obtenemos el código del icono para la condición climática actual
const weatherIcon = (weatherData) => {
    const weatherCode = weatherData.WeatherIcon;
    const isDayTime = weatherData.IsDayTime;
  
    switch (weatherCode) {
      case 1:
      case 2:
      case 3:
        return isDayTime ? "fas fa-sun" : "fas fa-moon";
      case 4:
      case 5:
      case 6:
      case 7:
        return "fas fa-cloud-sun";
      case 8:
      case 9:
      case 10:
        return "fas fa-cloud-rain";
      case 11:
      case 12:
      case 13:
      case 14:
        return "fas fa-cloud-showers-heavy";
      case 15:
      case 16:
        return "fas fa-snowflake";
      case 17:
      case 18:
        return "fas fa-bolt";
      case 19:
      case 20:
      case 21:
      case 22:
        return "fas fa-smog";
      default:
        return "fas fa-question-circle";
    }
  };
  
  // Agregamos el icono a la página HTML
  const addIcon = (iconClass) => {
    const iconElement = document.createElement("i");
    iconElement.classList.add(iconClass);
    document.getElementById("weather-icon").appendChild(iconElement);
  };
  
  function getWeatherData() {
    // ...
  
    // Obtenemos el icono correspondiente a la condición climática actual
    const iconClass = weatherIcon(weatherData);
  
    // Agregamos el icono a la página HTML
    addIcon(iconClass);
  }
  