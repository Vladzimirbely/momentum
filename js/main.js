const time = document.querySelector('.time');
const dateToday = document.querySelector('.date');
const date = new Date();
const userName = document.querySelector('.name');

class Time {
    getTime() {
        return new Date().toLocaleTimeString();
     }

    showTime() {
        setInterval(
            () => time.textContent = this.getTime(),
            1000);
    }

    getDate() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = date.getDay();
        const options = {day: 'numeric', month: 'long', timeZone: 'UTC'};
        const currentDate = date.toLocaleDateString('en-En', options);
        dateToday.textContent = `${days[currentDay]}, ${currentDate}`;
    }
}

const timeZone = new Time();
timeZone.showTime();
timeZone.getDate();

class Greetings {
    getTimeOfDay() {
        const hours = date.getHours();
        const greeting = document.querySelector('.greeting');
        
        if (hours >= 0) {
            greeting.textContent = 'Good night';
        }
        if (hours >= 6) {
            greeting.textContent = 'Good morning';
        }
        if (hours >= 12) {
            greeting.textContent = 'Good afternoon';
        }
        if (hours >= 18) {
            greeting.textContent = 'Good evening';
        } 
    }    
}

const greetings = new Greetings();
greetings.getTimeOfDay();

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let randomNum = Math.ceil(Math.random() * num.length);
let randomNumPadStart = (randomNum + '').padStart(2, 0);

class Background {
    setBg() {
        const hours = date.getHours();

        if (hours >= 0) {
            const randomNumFor0 = Math.ceil(randomNum / 5)
            const randomNumPadStartFor0 = (randomNumFor0 + '').padStart(2, 0);
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + randomNumPadStartFor0 + ".jpg')";
        }
        if (hours >= 6) {
            const randomNumFor6 = Math.ceil(randomNum / 4)
            const randomNumPadStartFor6 = (randomNumFor6 + '').padStart(2, 0);
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + randomNumPadStartFor6 + ".jpg')";
        }
        if (hours >= 12) {
            const randomNumFor12 = Math.ceil(randomNum / 2)
            const randomNumPadStartFor12 = (randomNumFor12 + '').padStart(2, 0);
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + randomNumPadStartFor12 + ".jpg')";
        }
        if (hours >= 18) {
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + randomNumPadStart + ".jpg')";
        }
        
        this.getSliderNext();
        this.getSliderPrev(); 
    }

    getSliderNext() {
        const slideNext = document.querySelector('.slide-next');
        slideNext.addEventListener('click', () => {
            
            let theNum = '11';
            theNum++
            if (theNum !== randomNum) {
                theNum++
            }
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + theNum + ".jpg')";
            
            console.log(document.body.style.backgroundImage)


        //     target = randomNum;
        //     if (target < 20) {
        //         target += 1
        //         console.log(target)
        //         let a = (target + '').padStart(2, 0);
        //         document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + a + ".jpg')";
        //     }
        })
    }

    getSliderPrev() {
        const slidePrev = document.querySelector('.slide-prev');
        
        slidePrev.addEventListener('click', ( {target} ) => {
            
            target = randomNum;
            if (target > 0) {
                target -= 1
                console.log(target)
                let a = (target + '').padStart(2, 0);
                document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + a + ".jpg')";
            }
        })
        
    }
}

const background = new Background();
background.setBg();


const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather() {  
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

getWeather();


function setLocalStorage() {
    localStorage.setItem('name', userName.value);
  }

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {

    if(localStorage.getItem('name')) {
        userName.value = localStorage.getItem('name');
    }
  }

window.addEventListener('load', getLocalStorage);
