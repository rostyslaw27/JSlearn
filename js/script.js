"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('What movie did you watch last?', ''),
              b = prompt('Rate it', '');
    
        if (a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Small amount of films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Standart user');
    } else if (personalMovieDB.count >= 30 ) {
        console.log('Fan!');
    } else {
        console.log ('Error!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i<=3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your favorite genre with number ${i}`);
    }
}

writeYourGenres();