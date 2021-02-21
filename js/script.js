"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you watched?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you watched?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Small amount of films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Standart user');
        } else if (personalMovieDB.count >= 30 ) {
            console.log('Fan!');
        } else {
            console.log ('Error!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i<2; i++) {
            let genres = prompt(`Your favorite genres?`).toLowerCase();

            if(genres === '' || genres == null) {
                console.log('You entered uncorrect data');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }    
            
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Favorite genre ${i + 1} - ${item}`);
            });
        }
    }
};