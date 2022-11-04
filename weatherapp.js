getWeatherData = (city) => {
    const URL = 'https://api.openweathermap.org/data/2.5/weather'
    const ApiKey='a8e71c9932b20c4ceb0aed183e6a83bb'
    const fullUrl=`${URL}?q=${city}&appid=${ApiKey}&units=imperial`
    
    return fetch(fullUrl)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.error(err));
  }
  
  
  const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    const data = await getWeatherData(city)
    showWeatherData(data)
  }
  
  const showWeatherData = (weatherData) => {
  
     console.log(weatherData);
     document.getElementById('city-name').innerText = weatherData.name
     document.getElementById('temp').innerText = weatherData.main.temp;
     document.getElementById('weather-type').innerText = weatherData.weather[0].main;
     document.getElementById('min-temp').innerText = weatherData.main.temp_min;
     document.getElementById('max-temp').innerText = weatherData.main.temp_max;
  }
  
  
  
  