"use strict";

const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('What movie did you watch last?', ''),
      b = prompt('Rate it', ''),
      c = prompt('What movie did you watch last?', ''),
      d = prompt('Rate it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;