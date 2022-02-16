import React from "react";

const ListItem = ({song, onSongClick}) => {

    const handleClick = function(){
        onSongClick(song);
    }

    return <li onClick = {handleClick}>{song.name}</li>
}

export default ListItem;