import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';


const ChartContainer = () => {
    const [songs, setSongs] = useState(null);

    useEffect(() => {
        getSongs('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
    }, [])

    const getSongs = function(url){
        fetch(url)
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
    }

    const handleChange = function(event){
        const chosenGenre = event.target.value
        getSongs(chosenGenre)

    }

    return (
        <div class="chart-container">
        <h2>Hit Parade or Shit Parade?</h2>
        <select defaultValue="" onChange={handleChange}>
            <option value="">
                Choose Genre
            </option>
            <option
            value="https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
            key='1'>
                All
            </option>
            <option
            value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"
            key='2'>
                Rock
            </option>
            <option
            value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"
            key='3'>
                Dance
            </option>
            <option
            value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"
            key='4'>
                Country
            </option>
            <option
            value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=29/json"
            key='5'>
                Anime
            </option>
            <option
            value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=27/json"
            key='6'>
                J-Pop
            </option>
            <option
            value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=37/json"
            key='7'>
                Sound Effects
            </option>
        </select>
        {songs ? <SongList songs={songs} /> : null}
        </div>

    )
}

export default ChartContainer;