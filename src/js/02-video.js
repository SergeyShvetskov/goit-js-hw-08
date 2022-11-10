import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const STORAGE_KEY = "videoplayer-current-time"

player.on('timeupdate', throttle(onTimeupd, 1000));
setTime();

function onTimeupd(event) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(event));
}

function setTime() {
    const savedTime = localStorage.getItem(STORAGE_KEY);    
    const parsedTime = JSON.parse(savedTime);
    if (parsedTime) {
        player.setCurrentTime(parsedTime.seconds);
    }
}
