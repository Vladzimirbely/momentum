const time = document.querySelector('.time');
const dateToday = document.querySelector('.date');
const date = new Date();
const userName = document.querySelector('.name')

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
        const greeting = document.querySelector('.greeting')
        
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
