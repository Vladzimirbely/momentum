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

class Background {
    getBackgroundImage() {
    }

    getRandomNum() {
        const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        const randomNum = Math.ceil(Math.random() * num.length);
        const randomNumPadStart = (randomNum + '').padStart(2, 0);

        const hours = date.getHours();

        if (hours >= 0) {
            const randomNumFor0 = Math.ceil(randomNumPadStart / 5)
            const randomNumPadStartFor0 = (randomNumFor0 + '').padStart(2, 0);
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + randomNumPadStartFor0 + ".jpg')";
        }
        if (hours >= 6) {
            const randomNumFor6 = Math.ceil(randomNumPadStart / 4)
            const randomNumPadStartFor6 = (randomNumFor6 + '').padStart(2, 0);
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + randomNumPadStartFor6 + ".jpg')";
        }
        if (hours >= 12) {
            const randomNumFor12 = Math.ceil(randomNumPadStart / 2)
            const randomNumPadStartFor12 = (randomNumFor12 + '').padStart(2, 0);
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + randomNumPadStartFor12 + ".jpg')";
        }
        if (hours >= 12) {
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + randomNumPadStart + ".jpg')";
        }
    }
}

const background = new Background();
background.getBackgroundImage();
background.getRandomNum()

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
