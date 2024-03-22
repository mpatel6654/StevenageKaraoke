

// Assuming you're adding result items something like this:
const resultItem = document.createElement('li');
resultItem.className = 'result-item';

// Assuming 'playButton' is your play button element
resultItem.appendChild(playButton);

const songTitle = document.createElement('span');
songTitle.className = 'song-title';
songTitle.textContent = 'Your Song Title Here';
// Append the song title to your result item
resultItem.appendChild(songTitle);

// Append your resultItem to the searchResults or similar container
document.getElementById('searchResults').appendChild(resultItem);
