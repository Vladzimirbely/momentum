export class Time {
    getTime() {
        return new Date().toLocaleTimeString();
     }

    showTime() {
        setInterval(
            () => time.textContent = this.getTime(), 1000);
    }

    getDate() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = date.getDay();
        const options = {day: 'numeric', month: 'long', timeZone: 'UTC'};
        const currentDate = date.toLocaleDateString('en-En', options);
        dateToday.textContent = `${days[currentDay]}, ${currentDate}`;
    }
}

const time = document.querySelector('.time');
const dateToday = document.querySelector('.date');
const date = new Date();
