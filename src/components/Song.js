import React from "react";

const Song = (song) => {
    return (
    <div id='song-container'>
        <div id="chart-position">
            <h1>{song.position}</h1>
        </div>
        <div id="song-img">
            <img src={song.image} alt={song.title} />
        </div>
        <div id="song-info">
            <h3 id="song-title">'{song.title}'</h3>
            <p id="song-artist">by {song.artist}</p>
            <p id="fine-print">{song.label}</p>
        </div>
        <audio id="song-player" controls>
            <source src={song.audio} type="audio/mp4" />
        </audio>
    </div>
    )
}

export default Song;