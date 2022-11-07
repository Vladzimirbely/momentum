const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

export class Weather {
    async getWeather() {  
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=f80deb3a0111a22f98c88e9d73f7445b&units=metric`;
        const res = await fetch(url);
        const data = await res.json(); 
            
        weatherIcon.className = 'weather-icon owf';
        city.value = data.name;
        wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
    }
}
