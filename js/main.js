import { Background } from "./Background.js";
import { Time } from "./Time.js";
import { Greeting } from "./Greeting.js";
import playList from './playlist.js';
import { PlaylistItem } from "./PlaylistItem.js";
import { Weather } from "./Weather.js";
import { Quotes } from "./Quotes.js";

const timeZone = new Time();
timeZone.showTime();
timeZone.getDate();

const greeting = new Greeting();
greeting.getTimeOfDay();

const background = new Background();
background.setBg();

const playlistItem = new PlaylistItem();
playlistItem.createPlaylist();

const weather = new Weather();
weather.getWeather();

const quotes = new Quotes();
quotes.getQuotes();

const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', () => {
    background.setBg();
})

const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', () => {
    background.setBg();
})

// Audioplayer

const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play');
let isPlay = false;

function playAudio() {        
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;   
}

function toggleBtn() {
    playBtn.classList.toggle('pause');
}

playBtn.addEventListener('click', () => { 
    if (playBtn.classList.contains('pause')) {
        audio.pause();
        isPlay = false;
    } else {
        playAudio();
    }
    toggleBtn();
});

let playNum = 0;
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');

function playNext() {
    audio.pause();
    const firstSong = playList.shift();
    playList.push(firstSong);
    audio.src = playList[0].src;
    audio.play();
    playBtn.classList.add('pause');
}

function playPrev() {
    audio.pause();
    const lastSong = playList.pop();
    playList.unshift(lastSong);
    audio.src = playList[0].src;
    audio.play();
}

playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);

const userName = document.querySelector('.name');

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
