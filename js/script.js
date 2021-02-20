"use strict";

const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


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

if (personalMovieDB.count < 10) {
    console.log('Small amount of films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Standart user');
} else if (personalMovieDB.count >= 30 ) {
    console.log('Fan!');
} else {
    console.log ('Error!');
}