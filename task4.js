const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const musicPlayer = document.querySelector('.music-player');

const songs = [
    { title: 'Agar_tum_saath_ho', artist: 'Arijit Singh', src: 'Agar_tum_saath_ho.mpeg', img: 'https://s2.dmcdn.net/v/BpKsH1RL-5HWuWJiN/x1080' },
    { title: 'CO2', artist: 'Prateek Kuhad', src: 'Co2.mpeg', img: 'https://i.ytimg.com/vi/U2SVCCENLjE/maxresdefault.jpg' },
    { title: 'Photograph', artist: 'Ed Sheeran', src: 'Photograph.mpeg', img: 'https://wallpapers.com/images/hd/charming-singer-ed-sheeran-2jz2tk43iyxen843.webp' },
    { title: 'Chahun_main_ya_na.mpeg', artist: 'Arijit Singh', src: 'Chahun_main_ya_na.mpeg', img: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/63983780.jpg' },
    { title: 'Channa Mereya.mpeg', artist: 'Arijit Singh', src: 'Channa Mereya.mpeg', img: 'https://i0.wp.com/ytimg.googleusercontent.com/vi/z-diRlyLGzo/maxresdefault.jpg?resize=160,120' },
    { title: 'Lonely', artist: 'Akon', src: 'Lonely.mpeg', img: 'https://i.ytimg.com/vi/U-GhGGLn4qA/maxresdefault.jpg' },
    { title: 'Paravashanadenu', artist: 'Sonu Nigam', src: 'Paramathma.mpeg', img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9842/129842-h' },
    { title: "It's_You", artist: 'Ali Gate', src: "It's_You.mpeg", img: 'https://i.ytimg.com/vi/FOiJKl6EHBk/maxresdefault.jpg' },
    { title: 'Hymm of the Weekend', artist: 'Coldplay', src: 'Hymm of the Weekend.mpeg', img: 'https://lovelace-media.imgix.net/getty/117709083.jpg' },
];

let currentSongIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    musicPlayer.style.backgroundImage = `url(${song.img})`;
    document.body.style.backgroundImage = `url(${song.img})`;
    console.log(`Loading song: ${song.title}`);
    console.log(`Background image URL: ${song.img}`);
}

function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

loadSong(songs[currentSongIndex]);
