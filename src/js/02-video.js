
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay({ seconds }) {
//   try {
//     localStorage.setItem(CURRENT_TIME, String(seconds));
//   } catch (error) {
//     console.error('Failed to save current time to localStorage:', error);
//   }
// }


function onPlay (event) {
    localStorage.setItem(CURRENT_TIME, event.seconds) 
  };

setCurrentTime();

function setCurrentTime() {
  const savedTime = localStorage.getItem(CURRENT_TIME);
  if (!savedTime) {
    return;
  }
  const time = Number(savedTime);
  try {
    player.setCurrentTime(time);
  } catch (error) {
    console.error('Failed to set current time of video player:', error);
  }
}

