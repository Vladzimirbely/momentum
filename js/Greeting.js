export class Greeting {
    getTimeOfDay() {
        const hours = date.getHours();
        const greeting = document.querySelector('.greeting');
        
        if (hours < 12 && hours >= 6) {
            greeting.textContent = 'Good morning';
        } else if (hours >= 12 && hours < 18) {
            greeting.textContent = 'Good afternoon';
        } else if (hours >= 18 && hours < 24) {
            greeting.textContent = 'Good evening';
        } else {
            greeting.textContent = 'Good night';
        }
    }    
}

const date = new Date();
