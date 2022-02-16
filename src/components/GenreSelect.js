import React from "react";

const GenreSelector = () => {

    const handleChange = function(event){
        const chosenGenre = event.target.value
        onGenreClick(chosenGenre);
    }
}