export class Background {
    constructor() {
        this.currentImage;
        this.maxMorningIdx = 5;
        this.maxDayIdx = 10;
        this.maxEveningIdx = 15;
        this.maxNightIdx = 20;
    }

    getRandom(range) {
        const imgNum = 5;
        let randomNum;
        while (randomNum === this.currentImage || !randomNum) {
            randomNum = range - Math.ceil(Math.random() * imgNum);
        }
        return randomNum;
    }

    setBg() {
        const date = new Date();
        const hours = date.getHours();

        if (hours < 12 && hours >= 6) {
            this.currentImage = this.getRandom(this.maxMorningIdx);
        } else if (hours >= 12 && hours < 18) {
            this.currentImage = this.getRandom(this.maxDayIdx);
        } else if (hours >= 18 && hours < 24) {
            this.currentImage = this.getRandom(this.maxEveningIdx);
        } else {
            this.currentImage = this.getRandom(this.maxNightIdx);
        }
        const img = new Image();
        img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + (this.currentImage + '').padStart(2, 0) + '.jpg';
        img.onload = () => {
            document.body.style.backgroundImage = "url('" + 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/' + (this.currentImage + '').padStart(2, 0) + ".jpg')";
        }
    }   
}
