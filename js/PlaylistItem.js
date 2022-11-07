import playList from './playlist.js';
const playListContainer = document.querySelector('.play-list');

export class PlaylistItem {
    createPlaylist() {
        playList.forEach((elem) => {
            
          const playlistItem = document.createElement('li');
          
          playlistItem.classList.add('play-item');
          playlistItem.textContent = elem.title;
          playListContainer.append(playlistItem);
        })
        playListContainer.querySelectorAll('li');
    }
} 
