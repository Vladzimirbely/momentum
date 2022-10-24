const time = document.querySelector('.time');
const dateToday = document.querySelector('.date');

class Time {
    constructor() {
    }

    getTime() {
        return new Date().toLocaleTimeString();
     }

    showTime() {
        setInterval(
            () => time.textContent = this.getTime(),
            1000);
    }

    getDate() {
        const date = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dateDays = date.getDay();
        const options = {day: 'numeric', month: 'long', timeZone: 'UTC'};
        const currentDate = date.toLocaleDateString('en-En', options);
        dateToday.textContent = `${days[dateDays]}, ${currentDate}`;
    }
}

let timeZone = new Time();
timeZone.showTime();
timeZone.getDate();
