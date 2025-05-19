const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playlistItems = document.querySelectorAll('#playlist li');
const songTitle = document.getElementById('song-title');

let currentIndex = 0;
const songs = Array.from(playlistItems);

function loadSong(index) {
  const song = songs[index];
  audio.src = song.getAttribute('data-src');
  songTitle.textContent = song.getAttribute('data-title');
  highlightSelected(); // optional for visual feedback
}

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playSong();
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playSong();
}

// Load initial song
loadSong(currentIndex);

// Button event handlers
playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Playlist click handler
songs.forEach((song, index) => {
  song.addEventListener('click', () => {
    currentIndex = index;
    loadSong(currentIndex);
    playSong();
  });
});

// Optional: highlight selected song
function highlightSelected() {
  songs.forEach((s, idx) => {
    s.style.backgroundColor = idx === currentIndex ? '#e0ffff' : '';
  });
}

// Auto-play next when current ends
audio.addEventListener('ended', () => {
  nextSong();
});