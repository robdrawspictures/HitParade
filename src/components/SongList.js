import React from "react";
import ListItem from './ListItem';
import Song from "./Song";

const SongList = ({songs}) => {

    const songsItems = songs.map((song, index) => {
        return (
            <Song
                key = {song.id.attributes["im:id"]}
                position = {index+1}
                title = {song["im:name"].label}
                artist = {song["im:artist"].label}
                image={song["im:image"][2].label}
                audio={song.link[1].attributes.href}
                label={song.rights.label}
            />
        )
    })

    return (
        <div>
            <ul>
                {songsItems}
            </ul>
        </div>
    )
}

export default SongList;